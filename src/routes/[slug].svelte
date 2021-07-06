<script context="module" lang="ts">
	import { base } from '$app/paths';
  import type { Load } from '@sveltejs/kit';

	export const load: Load = async ({ page, fetch }) => {
		const slug = page.params.slug;
		const post = await fetch(`${base}/${slug}.json`).then((r) => r.json());
		return { props: { post } };
	}
</script>

<script lang="ts">
  import type {ProcessedMarkdown} from '$lib/markdown'

	export let post: ProcessedMarkdown;
</script>

<svelte:head>
	<title>{post.metadata.title}</title>
</svelte:head>

<div class="flex flex-row">
	<article class="prose">
		{@html post.content}
	</article>
	<img src={`${base}/${post.metadata.image}`} alt={post.metadata.imagealt} />
</div>
