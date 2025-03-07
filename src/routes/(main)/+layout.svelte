<script>
  import LeftSidebar from "$lib/components/left-sidebar.svelte";

  let { children } = $props();
  
</script>

<div class="flex bg-background text-foreground">
  <LeftSidebar />
  {@render children?.()}
</div>
