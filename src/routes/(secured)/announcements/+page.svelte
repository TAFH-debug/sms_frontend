<script lang="ts">
    export let data;
</script>

<div class="flex flex-col items-center">
    {#await data.announcements}
        <div>Loading...</div>
    {:then ann}
        {#each ann.data as item}
        <div class="card shadow-2xl w-1/3">
            <div class="card-body">
                <h1 class="text-sm text-gray-500">From: {item.author}</h1>
                <p class="line-clamp-3">{item.content}</p>
            </div>
            <div class="text-sm text-gray-500 text-center p-2">{new Date(item.createdAt).toLocaleString()}</div>
        </div>
        {/each}
    {/await}
</div>