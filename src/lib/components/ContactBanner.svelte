<script lang="ts">
	import { resolve } from '$app/paths';
	import Button from '$lib/components/Button.svelte';
	import { ButtonStyle } from '$lib/enums';
	import { highlightText } from '$lib/utils/text';
	import { t } from 'svelte-i18n';

	let images = [
		'images/pages/homepage/bg-cta-section.jpg',
		'images/pages/homepage/bg-cta-section@2x.jpg'
	];

	export let title: string;
	export let highlights: string[] = [];
	export let text: string;
	export let buttonLabel: string;

	$: titleParts =
		highlights.length > 0
			? highlightText(title, highlights)
			: [{ text: title, highlighted: false }];
</script>

<div class="relative h-[424px] w-full overflow-hidden">
	<picture class="h-full w-full">
		<source srcset={`${images[0]} 1x, ${images[1]} 2x`} />
		<img src={images[0]} alt="" class="h-full w-full object-cover" />
	</picture>
	<div
		class="absolute inset-0 flex h-full w-full flex-col items-center justify-center gap-8 bg-[#212529]/65 px-4 text-center"
	>
		<h2 class="font-serif text-3xl font-bold text-white md:text-5xl">
			{#each titleParts as part}
				{#if part.highlighted}
					<span class="text-secondary">{part.text}</span>
				{:else}
					{part.text}
				{/if}
			{/each}
		</h2>
		<p class="mb-6 max-w-3xl text-lg text-white md:text-xl">
			{text}
		</p>
		<Button label={buttonLabel} href={resolve(`/contact`)} buttonStyle={ButtonStyle.PRIMARY} />
	</div>
</div>
