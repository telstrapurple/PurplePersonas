import { process } from '$lib/markdown';

export function get({ params }) {
	const { slug } = params;

	const { metadata, content } = process(`src/roles/${slug}.md`);
	const body = JSON.stringify({ metadata, content });

	return { body };
}
