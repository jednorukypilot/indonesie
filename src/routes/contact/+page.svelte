<script lang="ts">
	import { base } from '$app/paths';
	import ContactForm from '$lib/components/ContactForm.svelte';
	import { t } from 'svelte-i18n';
	import { highlightText } from '$lib/utils/text';

	$: titleParts = highlightText(
		$t('contact.title'),
		$t('contact.highlights') as unknown as string[]
	);
</script>

<div class="block h-full min-h-screen w-full items-center bg-white">
	<div
		class="relative block h-[1400px] min-h-screen w-full overflow-hidden sm:h-[1200px] lg:h-[1000px] xl:h-[800px]"
	>
		<picture class="inline h-full w-full">
			<source
				srcset={`${base}/images/pages/contact/bg-contact.jpg 1x, ${base}/images/pages/contact/bg-contact@2x.jpg 2x`}
			/>
			<img
				src={`${base}/images/pages/contact/bg-contact.jpg`}
				alt={'bg-contact'}
				class="h-full w-full object-cover"
			/>
		</picture>

		<div class="absolute inset-0 flex items-start justify-center bg-[#212529]/82">
			<div
				class="flex h-full w-full max-w-[1400px] flex-col items-center
                    justify-center gap-4 lg:flex-row lg:justify-evenly lg:pl-4 xl:w-7/8 xl:gap-12 xl:pl-0"
			>
				<div
					class="flex h-min w-full flex-col justify-center overflow-auto p-6 text-start sm:p-12 lg:w-1/2 lg:justify-evenly"
				>
					<h2 class="mb-4 font-serif text-3xl font-bold text-white md:text-5xl lg:w-4/5">
						{#each titleParts as part}
							{#if part.highlighted}
								<span class="text-primary">{part.text}</span>
							{:else}
								{part.text}
							{/if}
						{/each}
					</h2>
					<p class="mb-4 text-lg text-gray-300">
						{$t('contact.text')}
					</p>
				</div>
				<div class="w-full lg:flex lg:h-full lg:w-1/2 lg:items-center lg:justify-center">
					<ContactForm />
				</div>
			</div>
		</div>
	</div>
</div>
