<script lang="ts">
    import type { Post, User } from '$lib/types';

    interface PageData {
        data: User;
    }

    let props: { data: PageData, post: Post } = $props();
</script>

<div>
  <div>
    <textarea id="content" placeholder="What is up my niggas?!" required></textarea>
  </div>
  <div>
    <input id="images" type = "file" multiple on:change={handleFileChange}>
    {#if images.length > 0}
        <div>{images.length} jerked</div>
    {/if}
  </div>
</div>
