<script context="module">
	import { base } from '$app/paths';

	export async function load({ fetch }) {
		const roles = await fetch(`${base}/index.json`).then((r) => r.json());
		return {
			props: { roles }
		};
	}
</script>

<script>
	export let roles;
</script>

<svelte:head>
	<title>Purple Personas</title>
</svelte:head>

<div>
	<h1>Purple Personas</h1>
	<p>
		Blurb about Purple Personas - Lorem ipsum dolor sit amet, consectetur adipiscing elit.
		Pellentesque lobortis libero sollicitudin feugiat feugiat. Class aptent taciti sociosqu ad
		litora torquent per conubia nostra, per inceptos himenaeos. In egestas erat nisl, at cursus
		lacus luctus eu. Nam commodo metus sed est pulvinar euismod. Donec suscipit nec lacus vitae
		imperdiet. Nam faucibus leo eget imperdiet posuere. Pellentesque gravida mauris vitae tortor
		pulvinar efficitur. Phasellus sit amet bibendum sapien. Aliquam in placerat enim. Phasellus vel
		accumsan velit. Maecenas placerat efficitur justo vel posuere.
	</p>
	<h2>Our Roles</h2>
	<div class="flex flex-row">
		{#each roles as role}
			<a href={`${base}/${role.slug}`} class="text-red-400">
				<h3 class="title">{role.metadata.title}</h3>
			</a>
		{/each}
	</div>
</div>
