<script context="module">
	import { base } from '$app/paths';
	export async function load({ page, fetch }) {
		const slug = page.params.slug;
		const post = await fetch(`${base}/${slug}.json`).then((r) => r.json());
		return { props: { post } };
	}
</script>

<script>
	export let post;
</script>

<svelte:head>
	<title>{post.metadata.title}</title>
</svelte:head>

{@html post.content}
