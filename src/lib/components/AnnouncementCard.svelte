<script lang="ts">
  import type { Announcement } from "$lib/types";
  let props: { announcement: Announcement } = $props();
</script>

<div class="card shadow-2xl w-1/3 bg-accent">
  <div class="card-body">
    <h1 class="text-sm text-accent-content">From: {props.announcement.author}</h1>
    <p class="line-clamp-3 text-accent-content">{props.announcement.content}</p>
  </div>
  <div class="text-sm text-accent-content text-center p-2">
    {new Date(props.announcement.createdAt).toLocaleString()}
  </div>
</div>
