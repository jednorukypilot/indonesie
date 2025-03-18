<script lang="ts">
	import Footer from '$lib/components/Footer.svelte';
	import '../app.css';

	let { children } = $props();
</script>

<div class="flex flex-col min-h-screen">
	{@render children()}
	
	<Footer/>
</div>
