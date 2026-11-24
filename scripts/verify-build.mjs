import { readFile, readdir, stat } from 'node:fs/promises';
import { resolve, join } from 'node:path';
import assert from 'node:assert/strict';

const dist = resolve('dist');
const exists = async (path) => { try { return await stat(path); } catch { return null; } };
for (const path of ['index.html', 'about/index.html', 'projects/index.html', 'research/index.html', 'blog/index.html', '404.html', 'rss.xml', 'sitemap-index.xml', 'admin/index.html', 'admin/config.yml']) {
  assert(await exists(join(dist, path)), `Missing build output: ${path}`);
}
const config = await readFile(join(dist, 'admin/config.yml'), 'utf8');
assert.match(config, /repo: JooREC0\/JooREC0\.github\.io/);
const walk = async (dir) => {
  const output = [];
  for (const item of await readdir(dir, {withFileTypes:true})) {
    const path = join(dir, item.name);
    if (item.isDirectory()) output.push(...await walk(path));
    else if (item.name.endsWith('.html')) output.push(path);
  }
  return output;
};
let checked = 0;
for (const path of await walk(dist)) {
  const html = await readFile(path, 'utf8');
  assert(!/choijiwng|holymo-ly/i.test(html), `Unexpected reference content: ${path}`);
  for (const match of html.matchAll(/(?:href|src)="(\/[^"?#]*)(?:[?#][^"]*)?"/g)) {
    const url = decodeURIComponent(match[1]);
    assert(!url.startsWith('//'), `Unexpected scheme-relative resource: ${url}`);
    const target = join(dist, url);
    assert(await exists(target) || await exists(join(target, 'index.html')), `Broken internal URL ${url} in ${path}`);
    checked++;
  }
}
const starterPath = resolve('src/content/blog/first-note.md');
if (await exists(starterPath)) {
  const frontmatter = (await readFile(starterPath, 'utf8')).split('---')[1] ?? '';
  if (/^draft:\s*true\s*$/m.test(frontmatter)) {
    assert(!(await exists(join(dist,'blog/first-note/index.html'))), 'The starter draft must not have a public route');
    for (const output of ['index.html', 'blog/index.html', 'rss.xml', 'sitemap-0.xml']) {
      assert(!(await readFile(join(dist,output), 'utf8')).includes('/blog/first-note/'), `The starter draft must not appear in ${output}`);
    }
  }
}
console.log(`PASS: routes, CMS repository, starter draft visibility, reference-content check, ${checked} internal links/resources.`);
