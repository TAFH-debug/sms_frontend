<script>
    import { onMount } from 'svelte';
    /**
     * @type {{ title: string, body: string }[]}
     */
    let posts = [];
    onMount(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(json => {
                posts = json;
            });
    });
</script>

<div class="flex flex-col items-center">
    {#each posts as post}
        <div class="rounded-lg w-2/5 m-2 card p-3">
            <div class="card-body">
                <h2 class="font-bold card-title">{post.title}</h2>
                <p class="">{post.body}</p>
            </div>
        </div>
    {/each}
</div>