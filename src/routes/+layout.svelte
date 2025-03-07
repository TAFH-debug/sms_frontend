<script>
  import "../app.css";

  let { children } = $props();
  import { page } from "$app/state";
  import Footer from "$lib/components/footer.svelte";
  import Header from "$lib/components/header.svelte";

  let title = "Renaissance";
  let description = "Age of revolution";
</script>

<svelte:head>
  <title>{title}</title>
  <meta name="description" content={description}>
  <meta property="og_site_name" content=“Example.com”>
  <meta property="og:url" content="https://www.example.com{page.url.pathname.toString()}">
  <meta property="og:type" content="website">
  <meta property="og:title" content="{title}">
  <meta property="og:description" content={description}>
</svelte:head>

<Header />
{@render children?.()}
<Footer />
