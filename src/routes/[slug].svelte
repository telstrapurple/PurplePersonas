<script context="module" lang="ts">
	import { base } from '$app/paths';
	import type { Load } from '@sveltejs/kit';

	export const load: Load = async ({ page, fetch }) => {
		const slug = page.params.slug;
		const post = await fetch(`${base}/${slug}.json`).then((r) => r.json());
		return { props: { post } };
	};
</script>

<script lang="ts">
	import type { ProcessedMarkdown } from '$lib/markdown';

	export let post: ProcessedMarkdown;
</script>

<svelte:head>
	<title>{post.metadata.title}</title>
</svelte:head>

<div class="flex flex-col sm:flex-row px-12 lg:px-48 pt-4 lg:pt-14 bg-gray-lighter">
	<article class="portfolio">
		<h2 class="pb-4 lg:pb-10">Our roles in {post.metadata.title}</h2>
		<div class="flex flex-col lg:flex-row justify-around pb-4 lg:pb-14">
			{#each post.metadata.roles.split(',') as role}
				<a
					href={`#${role.toLocaleLowerCase().replace(' ', '-')}-role-requirements`}
					class="text-red"
				>
					<h3>{role}</h3>
				</a>
			{/each}
		</div>
		{@html post.content}
	</article>
</div>
