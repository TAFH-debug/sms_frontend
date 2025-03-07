<script>
    import { onMount } from 'svelte';
    import { fade, fly, scale, slide } from 'svelte/transition';
    import { quintOut, elasticOut } from 'svelte/easing';
  
    // Navigation items
    const navItems = [
      { label: "Features", href: "#features" },
      { label: "Testimonials", href: "#testimonials" },
      { label: "Pricing", href: "#pricing" },
      { label: "Contact", href: "#contact" }
    ];
  
    // State for animations
    let mounted = false;
    let visibleSections = {
      hero: false,
      features: false,
      testimonials: false,
      cta: false
    };
  
    // Intersection observer for scroll animations
    onMount(() => {
      mounted = true;
      
      // Smooth scroll for navigation links
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
          e.preventDefault();
          document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
          });
        });
      });
  
      // Intersection Observer for section animations
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            visibleSections[entry.target.id] = true;
          }
        });
      }, { threshold: 0.1 });
  
      // Observe sections
      document.querySelectorAll('section[id]').forEach(section => {
        observer.observe(section);
      });
  
      // Initialize hero section as visible
      visibleSections.hero = true;
  
      return () => {
        observer.disconnect();
      };
    });
  
    // Background particles
    let particles = Array(20).fill().map(() => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 10 + 5,
      speed: Math.random() * 0.5 + 0.1
    }));
  
    // Mouse position for parallax effect
    let mouseX = 0;
    let mouseY = 0;
    
    function handleMouseMove(event) {
      mouseX = (event.clientX / window.innerWidth - 0.5) * 20;
      mouseY = (event.clientY / window.innerHeight - 0.5) * 20;
    }
  </script>
  
  <svelte:window on:mousemove={handleMouseMove} />
  
  <div class="min-h-screen flex flex-col relative overflow-hidden">
    <!-- Animated background gradient -->
    <div class="absolute inset-0 bg-gradient-to-br from-background to-background via-primary/5 opacity-50 z-0">
      <!-- Animated particles -->
      {#each particles as particle, i}
        <div 
          class="absolute rounded-full bg-primary/10 animate-pulse" 
          style="left: {particle.x}%; top: {particle.y}%; width: {particle.size}px; height: {particle.size}px; 
                 animation-delay: {i * 100}ms; animation-duration: {5 + particle.speed * 5}s;">
        </div>
      {/each}
    </div>
  
    <!-- Header -->
  
    <main class="flex-1 relative z-10">
      <!-- Hero Section with title on the left -->
      <section id="hero" class="py-12 md:py-24 lg:py-32 relative overflow-hidden">
        <div class="container px-4 md:px-6">
          <div class="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            {#if visibleSections.hero}
              <div class="space-y-4" in:fly={{ x: -50, duration: 800, easing: quintOut }}>
                <div class="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary mb-2" in:fade={{ delay: 300 }}>
                  Welcome to Acme Inc
                </div>
                <h1 class="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                  Join to the community of creators and innovators.
                </h1>
                <p class="max-w-[600px] text-muted-foreground md:text-xl" in:fade={{ delay: 400 }}>
                  Learn, research, and collaborate with like-minded individuals to build the future.
                </p>
                <div class="flex flex-col gap-2 min-[400px]:flex-row" in:fade={{ delay: 500 }}>
                  <a 
                    href="/dashboard" 
                    class="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-all duration-300 hover:bg-primary/90 hover:scale-105 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring relative overflow-hidden group"
                  >
                    <span class="relative z-10">Get Started</span>
                    <span class="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
                  </a>
                  <a 
                    href="#" 
                    class="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                  >
                    Learn More
                  </a>
                </div>
              </div>
              <div class="flex justify-center lg:justify-end" in:fly={{ x: 50, duration: 800, easing: quintOut }}>
                <div 
                  class="relative w-full max-w-[500px] aspect-video overflow-hidden rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 shadow-xl"
                  style="transform: perspective(1000px) rotateY(-5deg) rotateX(5deg) translateX({mouseX/2}px) translateY({mouseY/2}px);"
                >
                  <div class="absolute inset-0 flex items-center justify-center">
                    <div class="relative">
                      <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-image text-primary/40">
                        <rect width="18" height="18" x="3" y="3" rx="2" ry="2"></rect>
                        <circle cx="9" cy="9" r="2"></circle>
                        <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"></path>
                      </svg>
                      <div class="absolute inset-0 animate-pulse"></div>
                    </div>
                  </div>
                  <!-- Decorative elements -->
                  <div class="absolute top-4 right-4 w-20 h-20 rounded-full bg-primary/10 animate-pulse"></div>
                  <div class="absolute bottom-8 left-8 w-16 h-16 rounded-full bg-primary/20 animate-pulse" style="animation-delay: 1s;"></div>
                </div>
              </div>
            {/if}
          </div>
        </div>
        <!-- Decorative wave -->
        <div class="absolute bottom-0 left-0 right-0 h-8 bg-muted/50" style="clip-path: polygon(0% 0%, 100% 100%, 100% 100%, 0% 100%);"></div>
      </section>
  
      <!-- Features Section -->
      <section id="features" class="py-12 md:py-24 lg:py-32 bg-muted/50 relative">
        <div class="container px-4 md:px-6">
          {#if visibleSections.features}
            <div class="flex flex-col items-center justify-center space-y-4 text-center" in:fade={{ duration: 800 }}>
              <div class="space-y-2">
                <div class="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                  Features
                </div>
                <h2 class="text-3xl font-bold tracking-tighter md:text-4xl/tight bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                  Everything you need to succeed
                </h2>
                <p class="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our platform provides all the tools you need to streamline your workflow and boost productivity.
                </p>
              </div>
            </div>
            <div class="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              {#each [
                { title: "Seamless Integration", description: "Connect with your favorite tools and services without any hassle.", icon: "puzzle" },
                { title: "Advanced Analytics", description: "Gain valuable insights with our powerful analytics dashboard.", icon: "bar-chart" },
                { title: "Secure & Reliable", description: "Your data is protected with enterprise-grade security measures.", icon: "shield" }
              ] as feature, i}
                <div 
                  class="grid gap-1 p-6 rounded-xl border border-border/50 bg-background/50 backdrop-blur-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                  in:fly={{ y: 20, duration: 600, delay: i * 150 }}
                >
                  <div class="flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-primary-foreground mb-2 shadow-md">
                    {#if feature.icon === "puzzle"}
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-puzzle">
                        <path d="M19.439 7.85c-.049.322.059.648.289.878l1.568 1.568c.47.47.706 1.087.706 1.704s-.235 1.233-.706 1.704l-1.611 1.611a.98.98 0 0 1-.837.276c-.47-.07-.802-.48-.743-.95l.235-1.881c.059-.47-.177-.94-.587-1.175a1.444 1.444 0 0 0-1.41.038c-.47.235-.769.705-.587 1.175l.236 1.881c.059.47-.272.88-.743.95-.329.05-.654-.059-.837-.276l-1.611-1.611a2.404 2.404 0 0 1-.706-1.704c0-.617.235-1.233.706-1.704l1.568-1.568c.23-.23.556-.338.878-.29 1.13.142 1.222-.141 1.98-.9l.744-.744c.758-.758.6-1.038.9-1.98.047-.322-.06-.648-.29-.878L16.44 3.611A2.404 2.404 0 0 1 15.92.706c.47-.47 1.087-.706 1.704-.706s1.233.235 1.704.706l1.568 1.568c.23.23.338.556.29.878-.141 1.13.141 1.222.9 1.98l.744.744c.758.758 1.038.6 1.98.9.322.047.648-.06.878-.29l1.568-1.568A2.404 2.404 0 0 1 23.294 7.5c0 .617-.235 1.233-.706 1.704l-1.568 1.568c-.23.23-.556.338-.878.29-1.13-.142-1.222.141-1.98.9l-.744.744c-.758.758-.6 1.038-.9 1.98z"></path>
                      </svg>
                    {:else if feature.icon === "bar-chart"}
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-bar-chart">
                        <line x1="12" x2="12" y1="20" y2="10"></line>
                        <line x1="18" x2="18" y1="20" y2="4"></line>
                        <line x1="6" x2="6" y1="20" y2="16"></line>
                      </svg>
                    {:else}
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-shield">
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path>
                      </svg>
                    {/if}
                  </div>
                  <h3 class="text-xl font-bold">{feature.title}</h3>
                  <p class="text-muted-foreground">{feature.description}</p>
                </div>
              {/each}
            </div>
          {/if}
        </div>
        <!-- Decorative dots pattern -->
        <div class="absolute inset-0 opacity-30 pointer-events-none">
          <div class="absolute inset-0" style="background-image: radial-gradient(circle at 1px 1px, rgba(0, 0, 0, 0.05) 1px, transparent 0); background-size: 20px 20px;"></div>
        </div>
      </section>
  
      <!-- Testimonials Section -->
      <section id="testimonials" class="py-12 md:py-24 lg:py-32 relative">
        <div class="container px-4 md:px-6">
          {#if visibleSections.testimonials}
            <div class="flex flex-col items-center justify-center space-y-4 text-center" in:fade={{ duration: 800 }}>
              <div class="space-y-2">
                <div class="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                  Testimonials
                </div>
                <h2 class="text-3xl font-bold tracking-tighter md:text-4xl/tight bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                  Trusted by thousands of businesses
                </h2>
                <p class="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Don't just take our word for it. Here's what our customers have to say.
                </p>
              </div>
            </div>
            <div class="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              {#each [
                { name: "Sarah Johnson", role: "CEO, TechStart", content: "This platform has completely transformed how we operate. The seamless integration with our existing tools made the transition effortless." },
                { name: "Michael Chen", role: "Marketing Director, GrowthLabs", content: "The analytics dashboard provides insights that have helped us make data-driven decisions and significantly improve our ROI." }
              ] as testimonial, i}
                <div 
                  class="flex flex-col gap-4 rounded-xl border p-6 bg-background/80 backdrop-blur-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                  in:fly={{ y: 20, x: i % 2 === 0 ? -10 : 10, duration: 600, delay: i * 150 }}
                >
                  <div class="flex gap-1">
                    {#each Array(5) as _, j}
                      <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        width="20" 
                        height="20" 
                        viewBox="0 0 24 24" 
                        fill="currentColor" 
                        class="text-primary"
                        in:scale={{ duration: 300, delay: 300 + j * 100, easing: elasticOut }}
                      >
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                      </svg>
                    {/each}
                  </div>
                  <p class="text-muted-foreground">{testimonial.content}</p>
                  <div class="flex items-center gap-4 pt-4">
                    <div class="rounded-full bg-primary/10 h-10 w-10 flex items-center justify-center overflow-hidden relative">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-user text-primary">
                        <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                        <circle cx="12" cy="7" r="4"></circle>
                      </svg>
                      <div class="absolute inset-0 bg-primary/5 animate-pulse"></div>
                    </div>
                    <div>
                      <h4 class="font-semibold">{testimonial.name}</h4>
                      <p class="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              {/each}
            </div>
          {/if}
        </div>
        <!-- Decorative gradient blob -->
        <div class="absolute -bottom-48 -right-48 w-96 h-96 rounded-full bg-primary/10 blur-3xl opacity-50 animate-blob"></div>
        <div class="absolute -top-48 -left-48 w-96 h-96 rounded-full bg-primary/10 blur-3xl opacity-50 animate-blob" style="animation-delay: 2s;"></div>
      </section>
  
      <!-- CTA Section -->
      <section id="contact" class="py-12 md:py-24 lg:py-32 bg-muted/50 relative overflow-hidden">
        <div class="container px-4 md:px-6 relative z-10">
          {#if visibleSections.cta}
            <div 
              class="flex flex-col items-center justify-center space-y-4 text-center"
              in:fade={{ duration: 800 }}
            >
              <div class="space-y-2">
                <h2 class="text-3xl font-bold tracking-tighter md:text-4xl/tight bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                  Ready to get started?
                </h2>
                <p class="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Join thousands of satisfied customers and transform your business today.
                </p>
              </div>
              <div 
                class="flex flex-col gap-2 min-[400px]:flex-row"
                in:fly={{ y: 20, duration: 600, delay: 200 }}
              >
                <a 
                  href="#" 
                  class="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-all duration-300 hover:bg-primary/90 hover:scale-105 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring relative overflow-hidden group"
                >
                  <span class="relative z-10">Get Started</span>
                  <span class="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
                </a>
                <a 
                  href="#" 
                  class="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background/80 backdrop-blur-sm px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                >
                  Contact Sales
                </a>
              </div>
            </div>
          {/if}
        </div>
        <!-- Animated background elements -->
        <div class="absolute inset-0 overflow-hidden pointer-events-none">
          {#each Array(5) as _, i}
            <div 
              class="absolute rounded-full bg-primary/5" 
              style="
                width: {30 + Math.random() * 100}px; 
                height: {30 + Math.random() * 100}px; 
                left: {Math.random() * 100}%; 
                top: {Math.random() * 100}%; 
                animation: float {5 + Math.random() * 10}s infinite ease-in-out;
                animation-delay: {i * 0.5}s;
              "
            ></div>
          {/each}
        </div>
      </section>
    </main>
  </div>
  
  <style>
    @keyframes float {
      0%, 100% {
        transform: translateY(0) scale(1);
      }
      50% {
        transform: translateY(-20px) scale(1.05);
      }
    }
    
    @keyframes animate-blob {
      0% {
        transform: translate(0px, 0px) scale(1);
      }
      33% {
        transform: translate(30px, -50px) scale(1.1);
      }
      66% {
        transform: translate(-20px, 20px) scale(0.9);
      }
      100% {
        transform: translate(0px, 0px) scale(1);
      }
    }
    
    .animate-blob {
      animation: animate-blob 7s infinite ease-in-out;
    }
    
    /* Add some custom scrollbar styling */
    :global(html) {
      scroll-behavior: smooth;
    }
    
    :global(::-webkit-scrollbar) {
      width: 10px;
    }
    
    :global(::-webkit-scrollbar-track) {
      background: rgba(0, 0, 0, 0.05);
    }
    
    :global(::-webkit-scrollbar-thumb) {
      background: rgba(0, 0, 0, 0.1);
      border-radius: 5px;
    }
    
    :global(::-webkit-scrollbar-thumb:hover) {
      background: rgba(0, 0, 0, 0.2);
    }
  </style>