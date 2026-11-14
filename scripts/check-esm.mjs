// Imports every package's compiled ESM and CJS entry in plain Node, the way a
// consumer would. Catches builds that only work through a bundler, such as
// extensionless relative imports in dist/esm (issue #69).
import { createRequire } from 'node:module';
import { pathToFileURL } from 'node:url';
import path from 'node:path';

// @iso-safety-signs/elements defines classes extending HTMLElement at load time.
globalThis.HTMLElement ??= class {};

const packages = ['core', 'css', 'elements', 'react', 'vue'];
const require = createRequire(import.meta.url);
let failed = false;

for (const name of packages) {
  const dist = path.resolve('packages/@iso-safety-signs', name, 'dist');
  try {
    // oxlint-disable-next-line no-await-in-loop -- sequential keeps output ordered per package
    const esm = await import(pathToFileURL(path.join(dist, 'esm/index.js')).href);
    const cjs = require(path.join(dist, 'cjs/index.js'));
    const esmKeys = Object.keys(esm)
      .filter((k) => k !== 'default')
      .sort();
    const cjsKeys = Object.keys(cjs)
      .filter((k) => k !== 'default' && k !== '__esModule')
      .sort();
    if (esmKeys.join() !== cjsKeys.join()) {
      throw new Error(`ESM exports ${esmKeys.length} names, CJS exports ${cjsKeys.length}`);
    }
    console.log(`ok   @iso-safety-signs/${name} (${esmKeys.length} exports)`);
  } catch (err) {
    failed = true;
    console.error(`FAIL @iso-safety-signs/${name}: ${err.message}`);
  }
}

process.exit(failed ? 1 : 0);
