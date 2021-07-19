<script context="module">
	import { base } from '$app/paths';

	export async function load({ fetch }) {
		const portfolios = await fetch(`${base}/index.json`).then((r) => r.json());
		return {
			props: { portfolios }
		};
	}
</script>

<script lang="ts">
	import '../app.postcss';
	import Nav from '$lib/components/Nav.svelte';
	import type { PortfolioDefinition } from './index.json';
	import Header from '$lib/components/Header.svelte';

	export let portfolios: PortfolioDefinition[];
</script>

<div>
	<Nav />
	<Header {portfolios} />
	<slot />
</div>
