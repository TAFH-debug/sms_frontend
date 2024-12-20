<script lang="ts">
    import axiosInstance from "$lib/axios";

    interface Props {
        data: any;
    }

    let { data }: Props = $props();

    let user: { 
        username: string, 
        email: string, 
        password: string,
        isVerified: boolean,
        name: string,
        surname: string, 
        about: string,
        roles: { name: string, color: string }[]
    } = data.data;

    const verify = () => {
        axiosInstance.get('/verify');
    }
</script>

<main class="flex justify-center">
    <div class="flex flex-col w-2/5 items-center">
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
                    {user.name} {user.surname} <div class={user.isVerified ? "badge badge-success text-gray-300" : "badge badge-error text-gray-300"}>
                    {user.isVerified ? "Verified" : "Unverified"}
                    </div>
                </h1>
                <h2 class="text-lg mx-4">{user.username}</h2>
            </div>
        </div>
        <div class="flex w-full">
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

            {#if user.about}
                <div class="m-4">
                    <h2 class="text-xl">About</h2>
                    <p>{user.about}</p>
                </div>
            {:else}
                <div class="m-4">
                    <h2 class="text-xl">About</h2>
                    <p>Nothing</p>
                </div>
            {/if}
        </div>
        {#if !user.isVerified}
        <button class="max-w-[40%] btn btn-error text-gray-300" onclick={verify}>
        Verify
        </button>
        {/if}
        {/if}
    </div>
</main>