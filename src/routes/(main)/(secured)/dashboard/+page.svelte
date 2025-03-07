<script lang='ts'>
    import { FileText, Hash, Plus, Search, AtSign, Folder } from 'lucide-svelte';
    import Chat from '$lib/components/chat.svelte';
    import type { Channel } from '$lib/types.js';

    let { data } = $props();

    const actions = [
      { icon: Hash, label: "Channels" },
      { icon: FileText, label: "Drafts" },
      { icon: AtSign, label: "Mentions" },
      { icon: Folder, label: "Files & Media" }
    ];

    const channels = data.channels;
    let channel = $state(channels[0]);
  </script>
  
  <!-- Middle Section - Channels/DMs -->
  <div class="w-64 border-r flex flex-col">
    <!-- <div class="p-4 border-b flex items-center justify-between">
      <div class="flex items-center gap-2">
        <span class="text-sm text-muted-foreground">Messages /</span>
        <span class="text-sm">Team Chat</span>
      </div>
      <Button variant="ghost" size="icon" class="h-8 w-8">
        <Search size={18} />
      </Button>
    </div> -->
    
    <div class="p-2">
      <!-- <Button variant="default" class="w-full justify-start gap-2 mb-4">
        <Plus size={16} />
        <span>New Message</span>
      </Button> -->
      
      <!-- <div class="space-y-1 mb-4">
        {#each actions as channel}
          <div class="flex items-center gap-2 px-2 py-1.5 rounded-md text-sm hover:bg-muted/50">
            <channel.icon />
            <span>{channel.label}</span>
          </div>
        {/each}
      </div> -->
      
      <div class="mt-4">
        <h3 class="text-sm font-medium text-muted-foreground px-2 mb-2">Channels</h3>
        <div class="space-y-1">
          {#each channels as ch}
            <button onclick={() => {
              channel = ch;
            }} class={`flex w-full items-center gap-2 px-2 py-1.5 rounded-md ${ch.name == channel.name ? 'bg-primary/10' : 'hover:bg-muted/50'}`}>
              <Hash class="h-4 w-4 overflow-hidden"/>
              <span class="text-sm">{ch.name}</span>
            </button>
          {/each}
        </div>
      </div>
      <!-- 
      <div class="mt-4">
        <h3 class="text-sm font-medium text-muted-foreground px-2 mb-2">Direct Messages</h3>
        <div class="space-y-1">
          {#each directMessages as dm}
            <div class={`flex items-center gap-2 px-2 py-1.5 rounded-md ${dm.active ? 'bg-primary/10' : 'hover:bg-muted/50'}`}>
              <div class="h-8 w-8 rounded-full overflow-hidden">
                <img 
                  src={dm.avatar || "/placeholder.svg"} 
                  alt={dm.name} 
                  width={32} 
                  height={32} 
                  class="object-cover"
                />
              </div>
              <span class="text-sm">{dm.name}</span>
            </div>
          {/each}
        </div>
      </div> -->

    </div>
  </div>
  
  <!-- Right Section - Chat -->
  <Chat {...channel} />