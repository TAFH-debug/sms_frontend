<script>
    export let data;
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