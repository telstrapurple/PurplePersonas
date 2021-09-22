<script lang="ts">
	import type { PortfolioDefinition } from 'src/routes/index.json';
	import { base } from '$app/paths';

	export let portfolios: PortfolioDefinition[];
</script>

<div class="px-12 lg:px-32 pt-6 lg:pt-24 pb-3 lg:pb-12">
	<div class="max-w-screen-xl flex flex-col">
		<div class="flex flex-col lg:flex-row">
			<div class="flex flex-col">
				<h1 class="pb-3 lg:pb-12">Purple Personas</h1>
				<p class="max-w-prose">
					This page describes each of the Consulting roles at Telstra Purple in the various
					portfolios. It seeks to describe some defining characteristics about each role to give our
					people and future Purplonians a clear understanding of what we do.
					<br /><br />
					If you're interested to see more roles at Telstra Purple, make sure to check out
					<a href="http://purple.telstra.com/careers" class="text-red">Telstra Purple Careers</a>.
				</p>
			</div>
			<img src={`${base}/people.svg`} alt="Group of diverse people" class="max-h-300" />
		</div>
		{#if portfolios.length > 1}
			<h2 class="py-3 lg:pt-12 lg:pb-2">Our portfolios</h2>
			<div class="flex flex-col lg:flex-row justify-start flex-wrap">
				{#each portfolios as portfolio}
					<a href={`${base}/${portfolio.slug}`}>
						<div class="rounded-lg px-5 py-2 bg-red text-white text-lg mr-4 mb-2 hover:bg-black">
							{portfolio.metadata.title}
						</div>
					</a>
				{/each}
			</div>
		{:else}
			<div class="hidden">
				{#each portfolios as portfolio}
					<a href={`${base}/${portfolio.slug}`}>
						<div>{portfolio.metadata.title}</div>
					</a>
				{/each}
			</div>
		{/if}
	</div>
</div>
