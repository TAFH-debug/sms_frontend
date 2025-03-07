<script lang="ts">
  import { sessionUser } from "$lib/token";
  import { FileText, HelpCircle, Home, MessageCircle, Plus, Users } from "lucide-svelte";

  function SidebarItem({ icon, label, href, active = false }: { icon: any; label: string; href: string; active?: boolean }) {
    return { icon, label, href, active };
  }
  
  const favorites = [
    SidebarItem({ icon: FileText, label: "Technical Docs", href: "#", active: true }),
    SidebarItem({ icon: FileText, label: "Campaign Guideliness", href: "#", }),
    SidebarItem({ icon: FileText, label: "Important Rules", href: "#", }),
    SidebarItem({ icon: FileText, label: "Onboarding", href: "#" })
  ];
  
  const mainMenu = [
    SidebarItem({ icon: Home, label: "Dashboard", href: "/dashboard", }),
    SidebarItem({ icon: Users, label: "Announcements", href: "/announcements" }),
    SidebarItem({ icon: MessageCircle, label: "Messages", href: "/messages" }),
    SidebarItem({ icon: HelpCircle, label: "Support Center", href: "/support" }),
  ];

  const adminPanel = [
    SidebarItem({ icon: Plus, label: "Create Channel", href: "/new_channel" }),
  ];
</script>

<div class="w-64 border-r flex flex-col bg-muted/20">


<div class="p-4">
  <h3 class="text-sm font-medium text-muted-foreground mb-2">Main Menu</h3>
  <div class="space-y-1">
  {#each mainMenu as item}
      <a href={item.href} class={`flex items-center gap-2 px-2 py-1.5 rounded-md text-sm hover:bg-muted/50 text-foreground`}>
      <svelte:component this={item.icon} size={18} />
      <span>{item.label}</span>
      </a>
  {/each}
  </div>
</div>

<!-- <div class="p-4 mt-2">
    <h3 class="text-sm font-medium text-muted-foreground mb-2">Favorites</h3>
    <div class="space-y-1">
    {#each favorites as item}
        <div class={`flex items-center gap-2 px-2 py-1.5 rounded-md text-sm ${item.active ? 'bg-primary/10 text-primary' : 'hover:bg-muted/50 text-foreground'}`}>
        <svelte:component this={item.icon} size={18} />
        <span>{item.label}</span>
        </div>
    {/each}
    </div>
</div> -->

{#if $sessionUser && $sessionUser.roles?.find(role => role.permissions.includes('admin'))}
<div class="p-4 mt-2">
  <h3 class="text-sm font-medium text-muted-foreground mb-2">Admin Panel</h3>
  <div class="space-y-1">
  {#each adminPanel as item}
    <a href={item.href} class={`flex items-center gap-2 px-2 py-1.5 rounded-md text-sm hover:bg-muted/50 text-foreground`}>
    <svelte:component this={item.icon} size={18} />
    <span>{item.label}</span>
    </a>
  {/each}
  </div>
</div>
{/if}
</div>