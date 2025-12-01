<script lang="ts">
	import { highlightText } from '$lib/utils/text';
	import { t } from 'svelte-i18n';

	$: points = $t('about.text.points', {});
	$: titleParts = highlightText($t('about.text.title'), $t('about.text.title_highlights', {}) as unknown as string[]);
</script>

<div class="mx-4 mt-10 mb-20 flex w-full max-w-4xl flex-col items-start px-4 text-gray-800 md:px-0">
	<h2 class="mb-6 w-full font-serif text-3xl font-bold text-gray-900 md:text-4xl">
		{#each titleParts as part}  
            {#if part.highlighted}  
                <span class="text-primary">{part.text}</span>  
            {:else}  
                {part.text}  
            {/if}  
        {/each}
	</h2>
	<p class="mb-6 text-lg leading-relaxed">
		{$t('about.text.subtitle')}
	</p>
	<h3 class="mb-4 w-full font-serif text-2xl font-semibold text-gray-900 md:text-3xl">
		{$t('about.text.points_title')}
	</h3>
	<ul class="mb-6 list-disc pl-6">
		{#each points as point}
			<li class="mb-2 text-lg leading-relaxed">{point}</li>
		{/each}
	</ul>
	{#each $t('about.text.conclusion') as conclusion}
		<p class="mb-2 text-lg leading-relaxed">
			{conclusion}
		</p>
	{/each}
</div>
