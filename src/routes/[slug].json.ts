import { promises as fs } from 'fs';

import { process } from '$lib/markdown';
import type { RequestHandler } from '@sveltejs/kit';

export const get: RequestHandler = async ({ params }) => {
	const { slug } = params;

	const fileContents = await fs.readFile(`src/roles/${slug}.md`, { encoding: 'utf8' });

	const { metadata, content } = await process(fileContents);
	const body = JSON.stringify({ metadata, content });

	return { body };
};
