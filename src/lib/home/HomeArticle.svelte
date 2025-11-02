<script lang="ts">
    import type { ArticleData } from '$lib/types';
    
    export let article: ArticleData;
</script>

<div class="mx-8 my-12 flex w-full max-w-4xl flex-col rounded-lg bg-white p-6 shadow-lg md:flex-row">
    <img src={article.imageSrc} alt={article.title} class="mb-4 h-48 w-full rounded-lg object-cover md:mb-0 md:mr-6 md:h-auto md:w-48" />
    <div class="flex flex-col">
        <h2 class="mb-2 text-2xl font-bold">{article.title}</h2>
    </div>
</div>
