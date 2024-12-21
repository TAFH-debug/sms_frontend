<script lang="ts">
  import type { Post } from "$lib/types";
  let { post: Post } = $props();
</script>

<div class="card shadow-2xl w-1/3">
  <div class="card-body">
    <h1 class="text-sm text-gray-500">From: {post.author}</h1>
    {#each post.images as image}
      <img src={image} alt="alt" />
    {/each}
    <p class="line-clamp-3">{post.content}</p>
  </div>
  <div class="text-sm text-gray-500 text-center p-2">
    {new Date(post.createdAt).toLocaleString()}
  </div>
</div>
