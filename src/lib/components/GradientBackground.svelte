<script lang="ts">
  export let green: boolean = false;
</script>

{#if green}
    <div class="flex w-full flex-col items-center bg-linear-to-b from-[#ccdfcf] to-transparent">
        <slot />
    </div>
    {:else}
    <div class="flex w-full flex-col items-center bg-linear-to-b from-[#eee0c5] to-transparent">
        <slot />
    </div>
{/if}
