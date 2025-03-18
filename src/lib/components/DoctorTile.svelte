<script lang="ts">
	import type { Doctor } from '$lib/types';

	const { doctor } = $props();

	let copiedDoctor: { name: string; type: 'phone' | 'email' } | null = $state(null);

	function copyData(doctor: Doctor, type: 'phone' | 'email') {
		let data = '';
		if (type === 'phone') {
			data = doctor.phone;
		}
		if (type === 'email') {
			data = doctor.email;
		}
		navigator.clipboard.writeText(data);

		copiedDoctor = { name: doctor.name, type };
		setTimeout(() => {
			copiedDoctor = null;
		}, 1200);
	}

	function getIcon(doctor: Doctor, type: 'phone' | 'email'): string {
		if (copiedDoctor && copiedDoctor.name === doctor.name && copiedDoctor.type === type) {
			return 'copy-regular.svg';
		}
		if (type === 'phone') {
			return 'phone-solid.svg';
		}
		if (type === 'email') {
			return 'envelope-solid.svg';
		}
		return '';
	}
</script>

<div class=" mt-4 flex flex-row items-start gap-4">
	<img src={doctor.image} alt={doctor.name} class="border-neutral mb-4 w-1/3 border-2" />
	<div class="flex flex-col gap-1">
		<div class="mb-4 flex flex-col gap-2">
			<button
				class="inline-flex cursor-pointer items-center gap-2 hover:brightness-80"
				onclick={() => copyData(doctor, 'phone')}
			>
				<img src={getIcon(doctor, 'phone')} alt="phone" class="h-5 w-5" />
				<p class="text-lg">{doctor.phone}</p>
			</button>
			<button
				class="inline-flex cursor-pointer items-center gap-2 hover:brightness-80"
				onclick={() => copyData(doctor, 'email')}
			>
				<img src={getIcon(doctor, 'email')} alt="email" class="h-5 w-5" />
				<p class="text-lg">{doctor.email}</p>
			</button>
		</div>
		<p class="text-lg">{doctor.education}</p>
		<p class="text-lg">{doctor.focus}</p>
		<p class="text-lg">{doctor.interests}</p>
	</div>
</div>
