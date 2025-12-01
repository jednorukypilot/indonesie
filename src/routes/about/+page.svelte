<script lang="ts">
	import AboutHero from '$lib/components/about/AboutHero.svelte';
	import AboutPoint from '$lib/components/about/AboutPoint.svelte';
	import GradientBackground from '$lib/components/GradientBackground.svelte';
	import { t } from 'svelte-i18n';
	import type { AboutPointData } from '$lib/types';
	import AboutText from '$lib/components/about/AboutText.svelte';
	import ContactBanner from '$lib/components/ContactBanner.svelte';
	import AboutFAQ from '$lib/components/about/AboutFAQ.svelte';

	$: aboutPoints = $t('about.points.points', {}) as unknown as AboutPointData[];
</script>

<div class="flex min-h-screen w-full flex-col items-center bg-white">
	<AboutHero />
	<GradientBackground>
		<div
			class="my-20 flex w-full flex-col items-center lg:items-start justify-center px-4 lg:flex-row md:px-8 lg:px-16 xl:px-32 2xl:px-48"
		>
			{#each aboutPoints as data}
				<AboutPoint {data} />
			{/each}
		</div>
	</GradientBackground>
	<AboutText />
	<ContactBanner
		title={$t('about.contact_banner.title')}
		highlights={$t('about.contact_banner.title_highlights') as unknown as string[]}
		text={$t('about.contact_banner.text')}
		buttonLabel={$t('about.contact_banner.button_label')}
	/>
	<AboutFAQ />
</div>
