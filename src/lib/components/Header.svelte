<script lang="ts">
	import type { PortfolioDefinition } from 'src/routes/index.json';
	import { base } from '$app/paths';

	export let portfolios: PortfolioDefinition[];
</script>

<div class="bg-gray-lighter px-12 xl:px-48 py-6 xl:py-24">
	<div class="flex flex-col xl:flex-row">
		<div class="flex flex-col">
			<h1 class="pb-3 xl:pb-12">Purple Personas</h1>
			<p>
				This page describes each of the consulting roles at Telstra Purple. It seeks to describe
				some defining characteristics about each role to give our people and future Purplonians a
				clear understanding of what we do.
			</p>
			<br />
			<p>It's the anchor point used through all of our feedback and promotion cycles.</p>
			<br />
			<p>It's a living document, maintained by the very people it affects.</p>
		</div>
		<img src={`${base}/people.svg`} alt="Group of diverse people" />
	</div>
	<h2 class="py-3 xl:py-12">Our Portfolios</h2>
	<div class="flex flex-col xl:flex-row justify-between flex-wrap">
		{#each portfolios as portfolio}
			<a href={`${base}/${portfolio.slug}`} class="text-red">
				<h3>{portfolio.metadata.title}</h3>
			</a>
		{/each}
	</div>
</div>
