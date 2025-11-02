<script lang="ts">
	import GradientBackground from '$lib/components/GradientBackground.svelte';
	import HomeArticle from '$lib/home/HomeArticle.svelte';
	import HomeHero from '$lib/home/HomeHero.svelte';
	import HomePoint from '$lib/home/HomePoint.svelte';
	import type { ArticleData, HomePointData } from '$lib/types';

	let homePoints: HomePointData[] = [];
	let articles: ArticleData[] = [];
		
	export let data: { homePoints: HomePointData[]; articles: ArticleData[] };

	({ homePoints, articles } = data);

</script>

<div class="bg-base-100 flex w-full grow flex-col">
	<HomeHero />
	<GradientBackground>
		<div
			class="my-20 flex w-full md:flex-row items-center justify-center px-4 flex-col md:px-8 lg:px-16 xl:px-32 2xl:px-48"
		>
			{#each homePoints as data}
				<HomePoint {data} />
			{/each}
		</div>
	</GradientBackground>
	{#each articles as article}
		<HomeArticle {article} />
	{/each}
</div>
