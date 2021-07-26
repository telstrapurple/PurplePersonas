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

	export const scrollToTop = () => {
		window.scrollTo(0, 0);
	};

	export const handleScroll = () => {
		let scrollButton = document.getElementById('scrollToTopButton');
		if (window.scrollY > 500) {
			scrollButton.classList.add('block');
			scrollButton.classList.remove('hidden');
		} else {
			scrollButton.classList.add('hidden');
			scrollButton.classList.remove('block');
		}
	};
</script>

<svelte:window on:scroll={handleScroll} />

<svelte:head>
	<title>Purple Personas - {post.metadata.title}</title>
</svelte:head>

<div class="px-12 lg:px-32 max-w-screen-xl">
	<h2 class="pb-4 lg:pb-10 text-black text-xl">Our roles</h2>
	<div class="flex flex-col lg:flex-row justify-between pb-4 lg:pb-14">
		{#each post.metadata.roles.split(',') as role}
			<a href={`#${role.toLocaleLowerCase().replace(' ', '-')}-role-requirements`} class="text-red">
				<h3 class="text-lg">{role}</h3>
			</a>
		{/each}
	</div>
</div>
<div class="flex flex-col sm:flex-row px-12 lg:px-32 pt-4 lg:pt-14 bg-gray-lighter">
	<article class="portfolio">
		{@html post.content}
	</article>
</div>
<button
	id="scrollToTopButton"
	on:click={() => scrollToTop()}
	class="fixed bottom-5 right-7 bg-red text-white p-3 text-lg rounded-xl hidden">Top</button
>
