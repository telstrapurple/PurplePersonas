import unified from 'unified';
import parse from 'remark-parse';
import gfm from 'remark-gfm';
import frontmatter from 'remark-frontmatter';
import remark2rehype from 'remark-rehype';
import highlight from 'rehype-highlight';
import rehypeStringify from 'rehype-stringify';
import yaml from 'js-yaml';
import slug from 'rehype-slug';
import autolink from 'rehype-autolink-headings';

export interface MarkdownMetadata {
	title: string;
	sortorder: number;
	roles: string; // This is a CSV, needs to be split
}

export interface ProcessedMarkdown {
	metadata: MarkdownMetadata;
	content: string;
}

const parser = unified().use(parse).use(gfm).use(frontmatter, ['yaml']);

const runner = unified()
	.use(remark2rehype) // Convert Markdown to Rehype
	.use(slug) // Add id attribute to heading tags
	.use(autolink) // Add links inside heading tags (requires slug or equivalent)
	.use(highlight)
	.use(rehypeStringify);

export async function process(file: string): Promise<ProcessedMarkdown> {
	const tree = parser.parse(file) as any; // Not sure why the type is wrong, it definitely has a childen prop.

	let metadata = null;

	if (tree.children.length > 0 && tree.children[0].type === 'yaml') {
		metadata = yaml.load(tree.children[0].value);
		tree.children = tree.children.slice(1, tree.children.length);
	}

	const content = runner.stringify(await runner.run(tree));

	return { metadata, content };
}
