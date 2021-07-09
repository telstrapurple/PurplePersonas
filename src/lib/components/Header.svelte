<script lang="ts">
	import type { RoleDefinition } from 'src/routes/index.json';
	import { base } from '$app/paths';

	export let roles: RoleDefinition[];
</script>

<div class="bg-grey-100 px-48 py-24">
	<div class="flex flex-row">
		<div class="flex flex-col">
			<h1 class="pb-12">Purple Personas</h1>
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
	<h2 class="py-12">Our Roles</h2>
	<div class="flex flex-row justify-between flex-wrap">
		{#each roles as role}
			<a href={`${base}/${role.slug}`} class="text-red-400">
				<h3 class="text-red-100">{role.metadata.title}</h3>
			</a>
		{/each}
	</div>
</div>
