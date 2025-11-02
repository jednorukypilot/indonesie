<script>
	import Button from '$lib/components/Button.svelte';
	import { ButtonStyle } from '$lib/enums';
	import { t } from 'svelte-i18n';

	let images = [
		'images/pages/homepage/bg-cta-section.jpg',
		'images/pages/homepage/bg-cta-section@2x.jpg'
	];
</script>

<div class="relative h-[424px] w-full overflow-hidden">
	<picture class="h-full w-full">
		<source srcset={`${images[0]} 1x, ${images[1]} 2x`} />
		<img src={images[0]} alt="" class="h-full w-full object-cover" />
	</picture>
	<div
		class="absolute inset-0 flex h-full w-full flex-col items-center justify-center gap-8 bg-[#212529]/60 px-4 text-center"
	>
		<h2 class="font-serif text-3xl font-bold text-white md:text-5xl">
			{$t('home.contact_banner.title')}
		</h2>
		<p class="mb-6 max-w-3xl text-lg text-white md:text-xl">
			{$t('home.contact_banner.text')}
		</p>
		<Button
			label={$t('home.contact_banner.button_label')}
			href="#"
			buttonStyle={ButtonStyle.PRIMARY}
		/>
	</div>
</div>
