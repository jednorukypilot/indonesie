<script lang="ts">
	import type { LegalPointData } from '$lib/types';
	import { faCheck } from '@fortawesome/free-solid-svg-icons';
	import { FontAwesomeIcon } from '@fortawesome/svelte-fontawesome';

	export let data: LegalPointData;
</script>

<div class="m-5 flex w-full flex-row items-center text-left">
	<FontAwesomeIcon icon={faCheck} class="mx-4 mb-4 text-2xl text-gray-900" />
	<div class="mx-3 mb-2 flex flex-col lg:flex-row">
		<h3 class="inline-flex items-center text-xl font-semibold">{data.title}</h3>
		<p class="mt-1 inline-flex items-center leading-5 text-gray-900 lg:ml-3">
			{data.points.join(', ')}
		</p>
	</div>
</div>
