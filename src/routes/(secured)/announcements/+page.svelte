<script lang="ts">
  import AnnouncementCard from "$lib/components/AnnouncementCard.svelte";
  import type { Announcement } from "$lib/types";
  import type { AxiosResponse } from "axios";

  interface PageData {
    announcements: AxiosResponse<Announcement[]>;
  }

  let { data }: { data: PageData } = $props();
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
