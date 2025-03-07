<script lang="ts">
  import PostCard from "$lib/components/PostCard.svelte";
  import { post } from "$lib/examples";
</script>

<main class="min-h-screen flex justify-center items-center">
    <PostCard post={post}></PostCard>
</main>