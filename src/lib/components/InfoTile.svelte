<script lang="ts">
	export let title: string = '';
</script>

<div class="gap-4 rounded-md bg-white px-4 py-2">
    <div class="flex items-center gap-4">
        <img src="veterina_plus.svg" alt="plus" class="h-4 my-2"/>
        <h2 class="font-medium text-lg">{title}</h2>
    </div>
	<slot />
</div>
