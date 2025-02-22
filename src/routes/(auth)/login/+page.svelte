<script lang="ts">
  import axiosInstance from "$lib/axios";
  import PasswordIcon from "../../../lib/components/icons/passwordIcon.svelte";
  import UserIcon from "../../../lib/components/icons/userIcon.svelte";

  let password: string = $state("");
  let username: string = $state("");

  async function login() {
    const res = await axiosInstance.post("/auth/login", {
      username,
      password,
    });

    const token = res.data.access_token;
    
    localStorage.setItem("token", token);
    window.location.href = "/";
  }
</script>

<div>
    <div class="flex items-center justify-center min-h-screen">
        <form class="shadow rounded-lg flex flex-col gap-2 p-4">
            <h2 class="text-center font-bold text-xl ">Login</h2>
            <label class="input input-bordered flex items-center gap-2 input-primary">
              <UserIcon />
              <input type="text" class="grow" placeholder="Username" bind:value={username}/>
            </label>
            <label class="input input-bordered flex items-center gap-2 input-primary">
              <PasswordIcon />
              <input type="password" class="grow" placeholder="Password" bind:value={password}/>
            </label>
            <button type="submit" onclick={login} class="btn btn-primary">Login</button>
        </form>
    </div>
</div>