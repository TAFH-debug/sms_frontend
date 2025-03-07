<script>
  import { fade, fly } from "svelte/transition";
</script>

<footer class="border-t py-6 md:py-0 relative z-10 bg-background/80 backdrop-blur-sm">
    <div class="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
      {#if true}
        <div class="flex items-center gap-2" in:fade={{ duration: 300 }}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-box text-primary">
            <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"></path>
            <path d="m3.3 7 8.7 5 8.7-5"></path>
            <path d="M12 22V12"></path>
          </svg>
          <p class="text-sm text-muted-foreground">
            © 2024 Built by <a 
                href="https://github.com/TAFH-debug" 
                class="text-sm font-medium text-muted-foreground hover:text-primary transition-colors relative group"
            >
                TAFH
                <span class="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </a>. All rights reserved.
          </p>
        </div>
        <nav class="flex gap-4 sm:gap-6">
          {#each ["Terms", "Privacy", "Cookies"] as item, i}
            <a 
              href="#" 
              class="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors relative group"
              in:fly={{ y: 10, duration: 300, delay: 200 + i * 50 }}
            >
              {item}
              <span class="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </a>
          {/each}
        </nav>
      {/if}
    </div>
  </footer>