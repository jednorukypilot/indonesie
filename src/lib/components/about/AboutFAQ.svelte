<script lang="ts">
	import GradientBackground from '$lib/components/GradientBackground.svelte';
	import { t } from 'svelte-i18n';
	import type { FAQData } from '$lib/types';
	import type { Lang } from '$lib/i18n';
	import { DEFAULT_LANG } from '$lib/i18n';

	const faqFiles = import.meta.glob('$lib/content/*/about/faq.json', {
		eager: true,
		import: 'default'
	}) as Record<string, FAQData[]>;

	const pathFor = (lang: Lang) => `/src/lib/content/${lang}/about/faq.json`;

	export let lang: Lang = DEFAULT_LANG;

	$: faqData = faqFiles[pathFor(lang)] ?? faqFiles[pathFor(DEFAULT_LANG)];

	let open_index = -1;
</script>

<GradientBackground>
	<div class="mx-4 my-24 flex w-full flex-col items-center justify-center" id="faq">
		<div class="flex flex-col items-start md:w-5/8">
			<h2 class="mb-12 font-serif text-3xl font-bold text-gray-900 md:text-5xl">
				{$t('about.faq.title')}
			</h2>

			{#if faqData && faqData.length > 0}
				{#each faqData as faq, index}
					<button
						class="mb-6 flex w-full flex-row justify-between bg-white p-6 text-left shadow-md transition-colors duration-200 hover:bg-gray-50"
						on:click={() => (open_index = open_index === index ? -1 : index)}
					>
						<div class="flex flex-col gap-2">
							<h3 class="text-lg font-semibold text-gray-900">
								{faq.title}
							</h3>
							{#if open_index === index}
								{#each faq.paragraphs as paragraph}
									<p class="text-gray-700">
										{paragraph}
									</p>
								{/each}
							{/if}
						</div>
						<div class="ml-6 flex h-full items-end justify-start">
							<div class="h-8 w-8">
								<img
									src={open_index === index
										? 'images/icons/minus-circle.svg'
										: 'images/icons/plus-circle.svg'}
									alt={''}
								/>
							</div>
						</div>
					</button>
				{/each}
			{/if}
		</div>
	</div>
</GradientBackground>
