<script>
	import './layout.css';
	import favicon from '$lib/assets/bentogo.png';

	let { children } = $props();
</script>

<svelte:head><link rel="icon" href={favicon} /> <title>Bentobox | solution for your tummy</title></svelte:head>
{@render children()}
