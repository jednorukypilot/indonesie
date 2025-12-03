<script lang="ts">
	import { GradientColor } from '$lib/enums';

	export let color: GradientColor = GradientColor.YELLOW;

	//create switch function to set bgClass based on color prop
	let bgClass: string;
	$: {
		switch (color) {
			case GradientColor.GRAY:
				bgClass = 'bg-gradient-to-b from-[#c4cbd1] to-transparent';
				break;
			case GradientColor.GREEN:
				bgClass = 'bg-gradient-to-b from-[#ccdfcf] to-transparent';
				break;
			case GradientColor.YELLOW:
			default:
				bgClass = 'bg-gradient-to-b from-[#eee0c5] to-transparent';
				break;
		}
	}
</script>

<div class="flex w-full flex-col items-center {bgClass}">
	<slot />
</div>
