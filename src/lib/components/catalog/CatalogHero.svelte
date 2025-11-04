<script lang="ts">
	import Button from '$lib/components/Button.svelte';
	import Hero from '$lib/components/Hero.svelte';
	import { ButtonStyle } from '$lib/enums';
	import { t } from 'svelte-i18n';
</script>

<div class="relative flex w-full flex-col items-center justify-center overflow-hidden">
	<Hero
		images={{
			small: {
				'1x': 'images/pages/catalog/hero-sm.jpg',
				'2x': 'images/pages/catalog/hero-sm@2x.jpg'
			},
			large: {
				'1x': 'images/pages/catalog/hero.jpg',
				'2x': 'images/pages/catalog/hero@2x.jpg'
			}
		}}
	/>
	<div class="absolute inset-0 block h-full w-full bg-[#212529]/60 p-4">
		<div class="flex h-full w-full flex-col items-center justify-center text-start text-white">
			<div class="max-w-4xl text-start">
				<h2 class="mb-4 font-serif text-3xl leading-tight font-bold text-white md:text-5xl">
					{$t('catalog.hero.headline')}
					<span class="text-secondary">{$t('catalog.hero.highlight')}</span>
				</h2>
				<p class="mb-6 text-xl text-gray-100 md:text-2xl">
					{$t('catalog.hero.sub_line')}
				</p>
				<p class="mx-auto mb-8 max-w-2xl text-base text-gray-100 md:text-lg">
					{$t('catalog.hero.text')}
				</p>

				<div class="flex flex-col items-center justify-start gap-12 sm:flex-row">
					<Button
						label={$t('catalog.hero.more')}
						href="#catalog-intro"
						buttonStyle={ButtonStyle.PRIMARY}
					/>
				</div>
			</div>
		</div>
	</div>
</div>
