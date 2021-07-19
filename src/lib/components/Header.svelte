<script lang="ts">
	import type { PortfolioDefinition } from 'src/routes/index.json';
	import { base } from '$app/paths';

	export let portfolios: PortfolioDefinition[];
</script>

<div class="px-12 lg:px-48 py-6 lg:py-24">
	<div class="max-w-screen-xl flex flex-col">
		<div class="flex flex-col lg:flex-row">
			<div class="flex flex-col">
				<h1 class="pb-3 lg:pb-12">Purple Personas</h1>
				<p>
					This page describes each of the consulting roles at Telstra Purple. It seeks to describe
					some defining characteristics about each role to give our people and future Purplonians a
					clear understanding of what we do.
				</p>
				<br />
				<p>It's the anchor point used through all of our feedback and promotion cycles.</p>
			</div>
			<img src={`${base}/people.svg`} alt="Group of diverse people" />
		</div>
		<h2 class="py-3 lg:py-12">Our portfolios</h2>
		<div class="flex flex-col lg:flex-row justify-between flex-wrap">
			{#each portfolios as portfolio}
				<a href={`${base}/${portfolio.slug}`} class="text-red">
					<h3>{portfolio.metadata.title}</h3>
				</a>
			{/each}
		</div>
	</div>
</div>
