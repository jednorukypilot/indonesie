<script lang="ts">
	import type { Section } from '$lib/types';

	export let page: Section;
</script>

<div class="flex h-72 w-full items-center justify-center text-white md:h-96 lg:h-128">
	<a
		id={page.styleId}
		href={page.url}
		class="justify-space-between flex w-full max-w-175 flex-col items-center gap-4 px-10"
	>
		<div class="flex grow flex-col items-center justify-center gap-4">
			<h2 class="hidden text-center text-5xl md:inline">{page.name}</h2>
			<h2 class="text-center text-4xl md:hidden">{page.name_short}</h2>
			<p class="text-neutral hidden text-center text-xl md:inline">{page.note}</p>
		</div>
		<div
			class="bg-accent hover:bg-accent-hover mb-12 rounded-full p-2 px-6 py-3 text-center text-lg lg:mb-16"
		>
			VSTOUPIT
		</div>
	</a>
</div>

<style>
	#bg-tile-horses {
		height: 100%;
		background:
			linear-gradient(
				to bottom,
				rgba(0, 94, 62, 1),
				rgba(0, 94, 62, 0.9),
				rgba(0, 94, 62, 0.9),
				rgba(0, 94, 62, 1)
			),
			url('kone_bg.png');
		background-size: cover;
		background-repeat: no-repeat;
		background-position: center;
	}
	#bg-tile-clinic {
		height: 100%;
		background:
			linear-gradient(
				to bottom,
				rgba(0, 62, 94, 1),
				rgba(0, 62, 94, 0.85),
				rgba(0, 62, 94, 0.85),
				rgba(0, 62, 94, 1)
			),
			url('ordinace_bg.png');
		background-size: cover;
		background-repeat: no-repeat;
		background-position: center;
	}
</style>
