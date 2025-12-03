<script lang="ts">
	import { base, resolve } from '$app/paths';
	import Button from '$lib/components/Button.svelte';
	import Hero from '$lib/components/Hero.svelte';
	import { ButtonStyle } from '$lib/enums';
	import { t } from 'svelte-i18n';
</script>

<div class="relative flex w-full flex-col items-center justify-center overflow-hidden">
	<Hero
		images={{
			small: {
				'1x': 'images/pages/homepage/hero-sm.jpg',
				'2x': 'images/pages/homepage/hero-sm@2x.jpg'
			},
			large: {
				'1x': 'images/pages/homepage/hero.jpg',
				'2x': 'images/pages/homepage/hero@2x.jpg'
			}
		}}
	/>
	<div class="absolute inset-0 block h-full w-full bg-[#212529]/60 p-4">
		<div class="flex h-full w-full flex-col items-center justify-center text-center text-white">
			<div class="max-w-4xl text-center">
				<h2 class="mb-10 font-serif text-3xl leading-tight font-bold text-white md:text-5xl">
					{$t('home.hero.headline')}
					<span class="text-secondary">{$t('home.hero.highlight')}</span>
				</h2>
				<p class="mx-auto mb-8 max-w-2xl text-base text-gray-100 md:text-lg">
					{$t('home.hero.text')}
				</p>
				<div class="flex flex-col items-center justify-center gap-12 sm:flex-row">
					<Button label={$t('home.hero.more')} href="#content" buttonStyle={ButtonStyle.GREEN} />
					<Button
						label={$t('home.hero.contact')}
						href={`${base}/contact`}
						buttonStyle={ButtonStyle.PRIMARY}
					/>
				</div>
			</div>
		</div>
	</div>
</div>
