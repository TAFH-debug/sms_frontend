<script>
    import "../app.css";
    import Header from "./components/header.svelte";
  import Navbar from "./components/navbar.svelte";
</script>

<Navbar>
    <Header />
    <slot />
</Navbar>
