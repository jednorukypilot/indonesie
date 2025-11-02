<script lang="ts">
	import type { HomePointData } from "$lib/types";

    export let data : HomePointData
</script>

<div class="mx-8 my-6 flex w-full max-w-md flex-col items-center text-center">
    <img src={data.icon} alt={data.title} class="mb-4 h-12 w-12" />
    <h3 class="mb-2 text-xl font-semibold">{data.title}</h3>
    <p class="text-gray-900">{data.description}</p>
</div>

