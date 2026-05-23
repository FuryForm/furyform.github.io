import { writeFile } from 'node:fs/promises';
import { resolve } from 'node:path';
import { pathToFileURL } from 'node:url';

const distRoot = pathToFileURL(resolve(process.cwd(), 'dist') + '/');
await writeFile(new URL('.nojekyll', distRoot), '');
await writeFile(new URL('CNAME', distRoot), 'furyform.com');
console.log('Wrote dist/.nojekyll and dist/CNAME');
