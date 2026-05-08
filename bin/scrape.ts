/**
 * scrape.ts
 *
 * Scrapes ISO 7010 safety sign data from the Wikipedia article "ISO 7010".
 * Returns structured data including Wikimedia Commons image URLs and
 * descriptions for each sign, grouped by category.
 *
 * Run indirectly via `yarn update` (bin/update.ts).
 */

import { parse } from 'node-html-parser';

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export type SignCategory = 'emergency' | 'fire' | 'mandatory' | 'prohibition' | 'warning';

/** A single scraped ISO 7010 sign entry. */
export interface ScrapedSign {
  /** ISO 7010 code, e.g. "E001". */
  code: string;
  /** Human-readable description from the Wikipedia gallery caption. */
  name: string;
  /** Wikimedia Commons file page URL for the sign's SVG. */
  imageUrl: string | null;
}

/** Root shape of the data returned by {@link scrape}. */
export type ScrapedData = Record<SignCategory, ScrapedSign[]>;

// ---------------------------------------------------------------------------
// Category configuration
// ---------------------------------------------------------------------------

/**
 * Maps each sign category to its letter prefix and the possible heading IDs
 * used on the Wikipedia article.  Multiple alternatives are tried in order
 * to be resilient to Wikipedia edits.
 */
const CATEGORIES: Array<{
  category: SignCategory;
  letter: string;
  headingIds: string[];
}> = [
  {
    category: 'emergency',
    letter: 'E',
    headingIds: ['E:_Emergency_signs', 'Emergency_signs', 'E_-_Emergency_signs'],
  },
  {
    category: 'fire',
    letter: 'F',
    headingIds: [
      'F:_Fire_equipment_signs',
      'F:_Fire_safety_signs',
      'Fire_equipment_signs',
      'Fire_safety_signs',
      'F_-_Fire_equipment_signs',
    ],
  },
  {
    category: 'mandatory',
    letter: 'M',
    headingIds: [
      'M:_Mandatory_action_signs',
      'M:_Mandatory_signs',
      'Mandatory_action_signs',
      'Mandatory_signs',
      'M_-_Mandatory_action_signs',
    ],
  },
  {
    category: 'prohibition',
    letter: 'P',
    headingIds: ['P:_Prohibition_signs', 'Prohibition_signs', 'P_-_Prohibition_signs'],
  },
  {
    category: 'warning',
    letter: 'W',
    headingIds: ['W:_Warning_signs', 'Warning_signs', 'W_-_Warning_signs'],
  },
];

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

/** Regex matching an ISO 7010 sign code, e.g. E001, W073, M004a */
const SIGN_CODE_RE = /\b([EFMPW]\d{3}[a-z]?)\b/;

/**
 * Extracts an ISO 7010 sign code from arbitrary text.
 * Returns null when no code is found.
 */
const extractCode = (text: string): string | null => {
  const m = text.match(SIGN_CODE_RE);
  return m ? m[1] : null;
};

/**
 * Cleans a gallery caption string into a human-readable sign name.
 * Removes the leading code (e.g. "E001"), strips extra whitespace,
 * dashes, and Wikipedia reference markers.
 */
const cleanName = (text: string, code: string): string =>
  text
    .replace(new RegExp(`^${code}\\s*[–—-]?\\s*`, 'i'), '')
    .replace(/\[\d+\]/g, '')
    .replace(/\s+/g, ' ')
    .trim();

// ---------------------------------------------------------------------------
// Scraping logic
// ---------------------------------------------------------------------------

/**
 * Extracts all gallery items from a section of the page.
 *
 * Wikipedia gallery items appear as `<li class="gallerybox">` with an image
 * link inside `.thumb a` and a caption inside `.gallerytext`.
 */
const scrapeSection = (
  htmlData: ReturnType<typeof parse>,
  headingId: string,
  letter: string,
): ScrapedSign[] => {
  const heading = htmlData.getElementById(headingId);
  if (!heading) return [];

  // Walk siblings until we find a gallery or another H2.
  let node = heading.parentNode?.nextElementSibling;
  const signs: ScrapedSign[] = [];

  while (node) {
    const tag = node.tagName?.toLowerCase();

    // Stop at the next H2 section.
    if (tag === 'h2') break;

    // Process gallery lists.
    if (tag === 'ul' && node.classNames?.includes('gallery')) {
      for (const li of node.querySelectorAll('li.gallerybox')) {
        // Image link.
        const imgLink = li.querySelector('.thumb a, .gallery-image-body a');
        const href = imgLink?.getAttribute('href') ?? null;
        const imageUrl = href ? `https://en.wikipedia.org${href}` : null;

        // Caption text.
        const captionEl = li.querySelector('.gallerytext, figcaption');
        const caption = captionEl?.textContent?.trim() ?? '';

        const code = extractCode(caption) ?? extractCode(href ?? '');
        if (!code || !code.startsWith(letter)) continue;

        const name = cleanName(caption, code) || code;
        signs.push({ code, imageUrl, name });
      }
    }

    node = node.nextElementSibling;
  }

  return signs;
};

// ---------------------------------------------------------------------------
// Public API
// ---------------------------------------------------------------------------

/**
 * Fetches the ISO 7010 Wikipedia page and extracts structured sign data
 * for all five categories (E, F, M, P, W).
 *
 * @returns Resolved {@link ScrapedData} containing all sign entries.
 * @throws When the Wikipedia page cannot be fetched (non-200 HTTP status).
 */
const scrape = async (): Promise<ScrapedData> => {
  const ISO_7010_URL = 'https://en.wikipedia.org/wiki/ISO_7010';
  const response = await fetch(ISO_7010_URL);
  if (response.status !== 200) {
    throw new Error(`Failed to fetch Wikipedia page: ${response.status}`);
  }

  const html = await response.text();
  const doc = parse(html);

  const result: ScrapedData = {
    emergency: [],
    fire: [],
    mandatory: [],
    prohibition: [],
    warning: [],
  };

  for (const { category, letter, headingIds } of CATEGORIES) {
    let signs: ScrapedSign[] = [];
    for (const headingId of headingIds) {
      signs = scrapeSection(doc, headingId, letter);
      if (signs.length > 0) break;
    }

    if (signs.length === 0) {
      console.warn(`  Warning: no signs found for category "${category}" (letter ${letter})`);
    } else {
      console.log(`  ${category}: ${signs.length} signs`);
    }

    result[category] = signs;
  }

  return result;
};

export default scrape;
