<script>
    import { browser } from '$app/environment';
    import { goto } from '$app/navigation';
    import { sessionUser } from '$lib/token';
    import { get } from 'svelte/store';

    let { children } = $props();

    if (browser && get(sessionUser) === null) goto("/signin");
</script>

{@render children?.()}