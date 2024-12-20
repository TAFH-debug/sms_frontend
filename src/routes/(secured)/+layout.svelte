<script>
    import { goto } from "$app/navigation";
    /** @type {{children?: import('svelte').Snippet}} */
    let { children } = $props();

    if (localStorage.getItem("token") === null) goto("/login");
</script>

{@render children?.()}