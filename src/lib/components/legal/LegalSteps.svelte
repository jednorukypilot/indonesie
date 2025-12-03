<script lang="ts">
	import { t } from 'svelte-i18n';
	import type { StepsData } from '$lib/types';

	export let stepsData: StepsData[] = [];
	let open_index = 0; // First step open by default
</script>

<div
	class="mx-auto my-20 flex w-full max-w-7xl flex-col items-start justify-center px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-48"
>
	<h2 class="mb-20 w-full font-serif text-3xl font-bold text-white md:text-4xl lg:text-5xl">
		{$t('legal.steps.title')}
	</h2>

	{#if stepsData && stepsData.length > 0}
		{#each stepsData as step, index}
			<button
				class="mb-6 flex w-full cursor-pointer flex-row justify-between bg-gray-100 p-6 text-left shadow-md transition-colors duration-200 hover:bg-gray-200"
				on:click={() => (open_index = index)}
			>
				<div class="flex w-full flex-col gap-4">
					<div class="flex w-full items-center justify-between gap-4">
						<div class="flex items-center gap-6">
							<div
								class="bg-warning flex h-12 w-12 min-w-12 items-center justify-center rounded-full"
							>
								<span class="mb-1.5 font-serif text-2xl font-bold text-white">{step.number}</span>
							</div>
							<h3 class="font-serif text-xl font-semibold text-gray-900 md:text-2xl">
								{step.title}
							</h3>
						</div>
						<div class="ml-6 flex h-full items-center justify-center">
							<div class="flex h-10 w-10 items-center justify-center">
								<i
									class="fas {open_index === index ? 'fa-minus' : 'fa-plus'} text-2xl text-gray-600"
								></i>
							</div>
						</div>
					</div>

					{#if open_index === index}
						<div class="ml-20 space-y-4 pt-3 pb-5">
							{#each step.data as dataItem}
								{#if dataItem.type === 'text'}
									<p class="leading-relaxed font-semibold text-gray-700">
										{dataItem.content}
									</p>
								{:else if dataItem.type === 'points' && Array.isArray(dataItem.content)}
									<ul class="ml-6 list-disc space-y-2">
										{#each dataItem.content as point}
											{#if point.trim() !== ''}
												<li class="text-gray-700">
													{point}
												</li>
											{/if}
										{/each}
									</ul>
								{/if}
							{/each}
						</div>
					{/if}
				</div>
			</button>
		{/each}
	{/if}
</div>
