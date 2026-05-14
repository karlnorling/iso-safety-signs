// @ts-check
import starlight from '@astrojs/starlight';
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://karlnorling.github.io',
  base: '/iso-safety-signs',
  integrations: [
    starlight({
      title: 'ISO Safety Signs',
      description:
        'Accessible ISO 7010 safety signs for React, Vue 3, Web Components, CSS, and static assets.',
      social: [
        {
          icon: 'github',
          label: 'GitHub',
          href: 'https://github.com/karlnorling/iso-safety-signs',
        },
      ],
      editLink: {
        baseUrl: 'https://github.com/karlnorling/iso-safety-signs/edit/main/apps/docs/',
      },
      sidebar: [
        {
          label: 'Start here',
          items: [
            { label: 'Introduction', slug: '' },
            { label: 'Getting started', slug: 'getting-started' },
          ],
        },
        {
          label: 'Packages',
          items: [
            { label: 'React', slug: 'packages/react' },
            { label: 'Vue 3', slug: 'packages/vue' },
            { label: 'Web Components', slug: 'packages/elements' },
            { label: 'CSS Sprite', slug: 'packages/css' },
            { label: 'SVG Sprite', slug: 'packages/sprite' },
            { label: 'Assets', slug: 'packages/assets' },
            { label: 'Core API', slug: 'packages/core' },
          ],
        },
        {
          label: 'Reference',
          items: [{ label: 'Sign Gallery', slug: 'gallery' }],
        },
      ],
    }),
  ],
});
