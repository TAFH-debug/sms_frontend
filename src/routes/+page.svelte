<script lang="ts">
  import axiosInstance from "$lib/axios";
  import type { Post } from "$lib/types";
  import { onMount } from "svelte";

  let posts: Post[] = $state([]);
  onMount(() => {
    axiosInstance.get("/posts").then((val) => {
      posts = val.data;
    });
  });
</script>

<div class="flex flex-col items-center">
  {#each posts as post}
    <div class="rounded-lg w-2/5 m-2 card p-3">
      <div class="card-body">
        <h2 class="font-bold card-title">{post.author.username}</h2>
        <p class="">{post.content}</p>
      </div>
    </div>
  {/each}
</div>
