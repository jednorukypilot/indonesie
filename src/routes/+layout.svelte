<script lang="ts">
	import TopBar from '$lib/components/TopBar.svelte';
	import '../app.css';

	let { children } = $props();
</script>

<div class="flex min-h-screen flex-col">
	<TopBar />
	{@render children()}
</div>
