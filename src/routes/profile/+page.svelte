<script lang="ts">
    import axiosInstance from "$lib/axios";
    import { onMount } from "svelte";

    let user: { 
        username: string, 
        email: string, 
        password: string,
        name: string,
        surname: string, 
        roles: { name: string, color: string }[]
    };

    onMount(() => {
        axiosInstance.get('http://localhost:3000/users/me').then((res) => {
            user = res.data;
            console.log(res.data);
        });
    });
</script>

<main class="flex justify-center">
    <div class="flex flex-col w-2/5">
        {#if user}
        <div class="flex items-center m-4 justify-center"> 
            <div class="avatar">
                <div class="rounded-full h-32">
                    <img
                        alt="Tailwind CSS Navbar component"
                        src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                    />
                </div>
            </div>
            <div>
                <h1 class="text-3xl font-bold mx-4">
                    {user.name} {user.surname}
                </h1>
                <h2 class="text-lg mx-4">{user.username}</h2>
            </div>
        </div>
        <div class="flex">
            {#if user.roles}
                <div class="m-4">
                    <h2 class="text-xl">Roles</h2>
                    <ul>
                        {#each user.roles as role}
                            <li class="badge badge-outline m-1" style={"color: " + role.color}>{role.name}</li>
                        {/each}
                    </ul>
                </div>
            {/if}
        </div>
        {/if}
    </div>
</main>