<script lang="ts">
	import Button from '$lib/components/Button.svelte';
	import { ButtonStyle } from '$lib/enums';
	import type { ArticleData } from '$lib/types';
	import { t } from 'svelte-i18n';
	import { highlightText } from '$lib/utils/text';
	import { base, resolve } from '$app/paths';

	export let article: ArticleData;
	export let reverse: boolean = false;

	$: titleParts = highlightText(article.title, article.highlights);
</script>

<div
	class="flex w-full max-w-[1800px] flex-col-reverse items-center justify-center px-8 py-12 md:px-12 {reverse
		? 'md:flex-row-reverse'
		: 'md:flex-row'} gap-4"
>
	<div class="flex w-full items-center justify-center md:w-1/2">
		<div class="flex flex-col lg:w-4/5">
			<h2 class="mb-4 font-serif text-3xl leading-tight font-bold text-gray-800 md:text-5xl">
				{#each titleParts as part}
					{#if part.highlighted}
						<span class="text-primary">{part.text}</span>
					{:else}
						{part.text}
					{/if}
				{/each}
			</h2>
			{#each article.paragraphs as paragraph}
				<p class="mb-4 text-gray-700">{paragraph}</p>
			{/each}
			<div class="mt-5 flex w-full flex-row items-center justify-center gap-5 md:justify-start">
				<Button
					label={$t('nav.catalog')}
					href={resolve(`/catalog`)}
					buttonStyle={ButtonStyle.PRIMARY}
				/>
				<Button
					label={$t('nav.write')}
					href={resolve(`/contact`)}
					buttonStyle={ButtonStyle.SECONDARY}
				/>
			</div>
		</div>
	</div>

	<div class="h-[310px] w-full overflow-hidden md:aspect-3/2 md:h-[580px] md:w-1/2">
		<picture class="h-full w-full">
			<source srcset={`${article.imageSrc[0]} 1x, ${article.imageSrc[1]} 2x`} />
			<img src={article.imageSrc[0]} alt={article.imageAlt} class="h-full w-full object-cover" />
		</picture>
	</div>
</div>
