<script>
    import { goto } from "$app/navigation";

    if (localStorage.getItem("token") === null) goto("/login");
</script>

<slot />