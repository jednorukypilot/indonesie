<script lang="ts">
	import type { AboutPointData } from '$lib/types';
	import { faCircleCheck, faCheck } from '@fortawesome/free-solid-svg-icons';
	import { FontAwesomeIcon } from '@fortawesome/svelte-fontawesome';

	export let data: AboutPointData;
</script>

<div class="mx-8 my-6 flex w-full max-w-md flex-row items-center text-center lg:flex-col">
	<FontAwesomeIcon
		icon={faCircleCheck}
		class="mr-4 mb-4 text-4xl text-warning lg:mr-0 lg:text-5xl"
	/>
	<div
		class="ml-4 text-start lg:ml-0 lg:flex lg:flex-col lg:items-center lg:justify-center lg:text-center"
	>
		<h3 class="mb-2 text-xl font-semibold">{data.title}</h3>
		<p class="text-gray-900">{data.description}</p>
	</div>
</div>
