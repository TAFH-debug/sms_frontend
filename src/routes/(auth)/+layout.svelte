<script>
    /** @type {{children?: import('svelte').Snippet}} */
    let { children } = $props();
</script>

<style>
    :global(body) {
        overflow: hidden;
    }
</style>

{@render children?.()}