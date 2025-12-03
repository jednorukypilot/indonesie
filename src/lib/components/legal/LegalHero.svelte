<script lang="ts">
	import Hero from '$lib/components/Hero.svelte';
	import { highlightText } from '$lib/utils/text';
	import { t } from 'svelte-i18n';

	$: titleParts = highlightText($t('legal.hero.headline'), $t('legal.hero.highlight'));
</script>

<div class="relative flex w-full flex-col items-center justify-center overflow-hidden">
	<Hero
		images={{
			small: {
				'1x': 'images/pages/legal/bg-legal-2.jpg',
				'2x': 'images/pages/legal/bg-legal-2@2x.jpg'
			},
			large: {
				'1x': 'images/pages/legal/bg-legal-2.jpg',
				'2x': 'images/pages/legal/bg-legal-2@2x.jpg'
			}
		}}
	/>
	<div class="absolute inset-0 block h-full w-full bg-[#212529]/78 p-4">
		<div class="flex h-full w-full flex-col items-center justify-center text-white">
			<div class="max-w-4xl text-center">
				<h2 class="mb-14 font-serif text-3xl leading-tight font-bold text-white md:text-5xl">
					{#each titleParts as part}
						{#if part.highlighted}
							<span class="text-secondary">{part.text}</span>
						{:else}
							{part.text}
						{/if}
					{/each}
				</h2>
				<p class="mx-auto mb-8 max-w-2xl text-base text-gray-100 md:text-lg">
					{$t('legal.hero.text')}
				</p>
			</div>
		</div>
	</div>
</div>
