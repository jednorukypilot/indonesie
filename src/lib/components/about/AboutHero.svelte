<script lang="ts">
	import { ButtonStyle } from '$lib/enums';
	import { t } from 'svelte-i18n';
	import Button from '../Button.svelte';
	import { base } from '$app/paths';
	import { highlightText } from '$lib/utils/text';

	$: titleParts = highlightText($t('about.hero.headline'), $t('about.hero.highlight').split(' '));
	$: paragraphs = $t('about.hero.paragraphs');
</script>

<div class="relative w-full flex h-[1400px] flex-col overflow-hidden sm:h-[1200px] lg:h-[1000px] xl:h-[800px]">
	<picture class="inline h-full w-full">
		<source
			srcset={`${base}/images/pages/about/bg-hero.jpg 1x, ${base}/images/pages/about/bg-hero@2x.jpg 2x`}
		/>
		<img
			src="{base}/images/pages/about/bg-hero.jpg"
			alt={'bg'}
			class="h-full w-full object-cover"
		/>
	</picture>

	<div class="absolute inset-0 flex cursor-pointer items-start justify-center bg-[#212529]/82">
		<div
			class="flex h-full w-full max-w-[1400px] flex-col-reverse items-center
				  justify-center gap-4 lg:flex-row lg:justify-evenly lg:pl-4 xl:w-7/8 xl:gap-12 xl:pl-0"
		>
			<div
				class="flex h-full w-full flex-col justify-evenly overflow-auto p-4 text-start lg:h-min lg:w-1/2"
			>
				<h2 class="mb-4 font-serif text-3xl font-bold text-white md:text-5xl lg:w-4/5">
					{#each titleParts as part}
						{#if part.highlighted}
							<span class="text-secondary">{part.text}</span>
						{:else}
							{part.text}
						{/if}
					{/each}
				</h2>
				{#each paragraphs as paragraph}
					<p class="mb-4 text-lg text-gray-300">{paragraph}</p>
				{/each}
				<div class=" mt-5 flex w-full flex-row items-center justify-center gap-6 lg:justify-start">
					<Button
						label={$t('about.hero.contact')}
						href={`${base}/contact`}
						buttonStyle={ButtonStyle.PRIMARY}
					/>
				</div>
			</div>
			<div class="w-full lg:flex lg:h-full lg:w-1/2 lg:items-center lg:justify-center">
				<picture class=" w-full lg:h-full lg:overflow-hidden">
					<source srcset={`${base}/images/pages/about/cat_3.jpg 1x`} />
					<img
						src={`${base}/images/pages/about/cat_3.jpg`}
						alt={'catalog_article'}
						class="h-[600px] w-full object-cover lg:h-full lg:w-min"
					/>
				</picture>
			</div>
		</div>
	</div>
</div>
