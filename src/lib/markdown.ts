import unified from 'unified';
import parse from 'remark-parse';
import gfm from 'remark-gfm';
import frontmatter from 'remark-frontmatter';
import remark2rehype from 'remark-rehype';
import highlight from 'rehype-highlight';
import rehypeStringify from 'rehype-stringify';
import { toVFile } from 'to-vfile';
import yaml from 'js-yaml';

let parser = unified().use(parse).use(gfm).use(frontmatter, ['yaml']);

let runner = unified().use(remark2rehype).use(highlight).use(rehypeStringify);

export function process(filename: string) {
	let tree = parser.parse(toVFile.readSync(filename)) as any; // Not sure why the type is wrong, it definitely has a childen prop.
	let metadata = null;
	if (tree.children.length > 0 && tree.children[0].type === 'yaml') {
		metadata = yaml.load(tree.children[0].value);
		tree.children = tree.children.slice(1, tree.children.length);
	}
	let content = runner.stringify(runner.runSync(tree));
	return { metadata, content };
}
