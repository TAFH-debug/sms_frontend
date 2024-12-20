<script lang="ts">
  import AnnouncementCard from "$lib/components/AnnouncementCard.svelte";
</script>

<div class="flex flex-col items-center">
  {#await data.announcements}
    <div>Loading...</div>
  {:then ann}
    {#each ann.data as item}
      <AnnouncementCard announcement={item} />
    {/each}
  {/await}
</div>
