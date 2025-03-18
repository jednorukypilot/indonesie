<script lang="ts">
	export let img: string = '';
	export let title: string = '';
	export let text: string = '';
</script>

<div class="flex flex-col items-center gap-4">
    <img src={img} alt={title} class="h-16" />
    <h3 class="text-center text-2xl font-bold">{title}</h3>
    <p class="text-center">{text}</p>
</div>


