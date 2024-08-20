<script lang="ts">
    export let data;
</script>

<div>
    {#await data.announcements}
        <div>Loading...</div>
    {:then ann} 
        {#each ann.data as item}
        <div class="">
            {item.title}
        </div>
        {/each}
    {/await}
</div>