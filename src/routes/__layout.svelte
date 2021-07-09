<script context="module">
	import { base } from '$app/paths';

	export async function load({ fetch }) {
		const roles = await fetch(`${base}/index.json`).then((r) => r.json());
		return {
			props: { roles }
		};
	}
</script>

<script lang="ts">
	import '../app.postcss';
	import Nav from '$lib/components/Nav.svelte';
	import type { RoleDefinition } from './index.json';
	import Header from '$lib/components/Header.svelte';

	export let roles: RoleDefinition[];
</script>

<div>
	<Nav />
	<Header {roles} />
	<slot />
</div>
