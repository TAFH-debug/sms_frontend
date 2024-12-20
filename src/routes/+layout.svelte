<script>
  import "../app.css";
  import Header from "../components/header.svelte";
  import Navbar from "../components/navbar.svelte";
  /** @type {{children?: import('svelte').Snippet}} */
  let { children } = $props();
</script>

<Navbar>
  <Header />
  {@render children?.()}
</Navbar>
