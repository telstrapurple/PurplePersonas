import fs from 'fs';
import { process } from '$lib/markdown';

export function get() {
	let posts = fs
		.readdirSync('src/posts')
		.filter((fileName) => /.+\.md$/.test(fileName))
		.map((fileName) => {
			const { metadata } = process(`src/posts/${fileName}`);
			return {
				metadata,
				slug: fileName.slice(0, -3)
			};
		});

	// TODO: Add metadata to sort by order

	let body = JSON.stringify(posts);

	return { body };
}
