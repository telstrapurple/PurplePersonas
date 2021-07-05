import fs from 'fs';
import { process } from '$lib/markdown';

export function get() {
	let roles = fs
		.readdirSync('src/roles')
		.filter((fileName) => /.+\.md$/.test(fileName))
		.map((fileName) => {
			const { metadata } = process(`src/roles/${fileName}`);
			return {
				metadata,
				slug: fileName.slice(0, -3)
			};
		});

	// TODO: Add metadata to sort by order

	let body = JSON.stringify(roles);

	return { body };
}
