<script lang="ts">
	import type { Post, User } from '$lib/types';
    import PostCard from '$lib/components/PostCard.svelte';
    import toast, { Toaster } from 'svelte-5-french-toast';
    interface PageData {
        data: User;
    }
    toast.error("Error...");
    let props: { data: PageData, post: Post } = $props();
</script>

<div class="flex flex-col items-center">
  {#await data.post}
    <div>Loading...</div>
  {:then ann}
    <PostCard post={ann.data} />
  {:catch error}
    {console.log(error)}
    <Toaster />
  {/await}
</div>
