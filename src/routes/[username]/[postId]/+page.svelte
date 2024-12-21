<script lang="ts">
  import PostCard from "$lib/components/PostCard.svelte";
</script>

<div class="flex flex-col items-center">
  {#await data.post}
    <div>Loading...</div>
  {:then post}
    <PostCard {post} />
  {/await}

  <!-- </ {#await data.comments}
    <div>Loading Comments...</div>
  {:then comments}
    {#each comments.data as item}
      <PostCard post={item} />
    {/each}
  {/await} > -->
</div>
