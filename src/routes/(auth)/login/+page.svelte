<script lang="ts">
  import axiosInstance from "$lib/axios";

  let password: string;
  let username: string;

  async function login() {
    const res = await axiosInstance.post('http://localhost:3000/auth/login', { username, password });

    const token = res.data.access_token;
    
    localStorage.setItem("token", token);
  }
</script>

<div>
    <div class="flex items-center justify-center min-h-screen">
        <form class="shadow rounded-lg flex flex-col gap-2 p-4">
            <h2 class="text-center font-bold text-xl ">Login</h2>
            <label class="input input-bordered flex items-center gap-2 input-primary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  class="h-4 w-4 opacity-70">
                  <path
                    d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
                </svg>

                <input type="text" class="grow" placeholder="Username" bind:value={username}/>
            </label>
            <label class="input input-bordered flex items-center gap-2 input-primary">
                <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                class="h-4 w-4 opacity-70">
                <path
                  fill-rule="evenodd"
                  d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                  clip-rule="evenodd" />
                </svg>

                <input type="password" class="grow" placeholder="Password" bind:value={password}/>
            </label>
            <button type="submit" on:click={login} class="btn btn-primary">Login</button>
        </form>
    </div>
</div>