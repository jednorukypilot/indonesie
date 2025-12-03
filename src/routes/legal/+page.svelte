<script lang="ts">
	import ContactBanner from '$lib/components/ContactBanner.svelte';
	import LegalHero from '$lib/components/legal/LegalHero.svelte';
	import LegalPoint from '$lib/components/legal/LegalPoint.svelte';
	import LegalFAQ from '$lib/components/legal/LegalFAQ.svelte';
	import LegalSteps from '$lib/components/legal/LegalSteps.svelte';
	import { type LegalPointData, type FAQData, type StepsData } from '$lib/types';
	import { t } from 'svelte-i18n';
	import GradientBackground from '$lib/components/GradientBackground.svelte';
	import { GradientColor } from '$lib/enums';

	export let data: { faq: FAQData[]; steps: StepsData[] };

	$: legalPoints = $t('legal.points') as unknown as LegalPointData[];
	$: ({ faq, steps } = data);
</script>

<div class="flex min-h-screen w-full flex-col items-center bg-white">
	<LegalHero />
	<div
		class="my-20 flex w-full max-w-7xl flex-col items-start justify-center px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-48"
	>
		<h3 class="mb-10 w-full font-serif text-3xl font-bold text-gray-900 md:text-4xl lg:text-5xl">
			{$t('legal.points_title')}
		</h3>
		{#each legalPoints as data}
			<LegalPoint {data} />
		{/each}
	</div>
	<div class="w-full bg-gray-900">
		<LegalSteps stepsData={steps} />
	</div>
	<LegalFAQ faqData={faq} />
	<ContactBanner
		title={$t('legal.contact_banner.title')}
		highlights={$t('legal.contact_banner.title_highlights') as unknown as string[]}
		text={$t('legal.contact_banner.text')}
		buttonLabel={$t('legal.contact_banner.button_label')}
	/>
</div>
