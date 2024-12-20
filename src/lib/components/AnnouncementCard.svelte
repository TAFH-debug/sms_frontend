<script lang="ts">
    import type { Announcement } from "$lib/types";
    let {announcement: Announcement} = $props();
  </script>
  
  <div class="card shadow-2xl w-1/3">
    <div class="card-body">
      <h1 class="text-sm text-gray-500">From: {announcement.author}</h1>
      <p class="line-clamp-3">{Announcement.content}</p>
    </div>
    <div class="text-sm text-gray-500 text-center p-2">
      {new Date(announcement.createdAt).toLocaleString()}
    </div>
  </div>