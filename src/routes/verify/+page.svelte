<script>
    /** @type {{data: any}} */
    let { data } = $props();
</script>

<div class="flex w-full">
    {#await data.verifyPromise}
    <div>
        Loading...
    </div>
    {:then}
    <div>
        You verified your email!
    </div>
    {/await}
</div>