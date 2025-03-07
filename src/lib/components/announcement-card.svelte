<script lang="ts">
  import type { Announcement } from "$lib/types";
  let props: { announcement: Announcement } = $props();
</script>

<div class="card shadow-2xl w-1/3">
  <div class="card-body">
    <h1 class="text-sm opacity-60">From: {props.announcement.author}</h1>
    <p class="line-clamp-3">{props.announcement.content}</p>
  </div>
  <div class="text-sm opacity-60 text-center p-2">
    {new Date(props.announcement.createdAt).toLocaleString()}
  </div>
</div>
