<script lang="ts">
	import DoctorTile from '$lib/components/DoctorTile.svelte';
	import InfoTile from '$lib/components/InfoTile.svelte';
	import Tabs from '$lib/components/Tabs.svelte';
	import { doctors, servicePoints, servicesNote, sectionTitle } from './data';
</script>

<div class="bg-primary flex grow flex-col">
	<div class="flex flex-row items-center gap-4 p-4">
		<a href="/">
			<img src="veterina_logo.svg" alt="veterina logo" class="h-16" />
		</a>
		<h1 class="text-primary invisible text-center text-4xl font-medium">
			{sectionTitle}
		</h1>
	</div>
	<div class="mx-auto mb-12 grid w-full max-w-[75rem] grid-cols-3 gap-4 px-8">
		<div class="col-span-2 col-start-1">
			<InfoTile title="Služby">
				<div class="flex h-98 flex-col">
					<p class="pt-4 text-lg">{servicesNote}</p>
					<div class="mb-4 flex grow flex-col justify-center">
						<ul class="list-disc py-2 pl-8">
							{#each servicePoints as point}
								<li class="text-lg">{point}</li>
							{/each}
						</ul>
					</div>
				</div>
			</InfoTile>
		</div>
		<div class="col-span-1">
			<Tabs />
		</div>
		{#each doctors as doctor, i}
			<div class={`col-span-2  ${(i + 1) % 2 ? 'col-start-1' : 'col-start-2'}`}>
				<InfoTile title={doctor.name}>
					<DoctorTile {doctor} />
				</InfoTile>
			</div>
		{/each}
	</div>
</div>
