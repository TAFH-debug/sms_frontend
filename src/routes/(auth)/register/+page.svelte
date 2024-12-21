<script lang="ts">
  import axiosInstance from "$lib/axios";
  import PasswordIcon from "../../../components/icons/passwordIcon.svelte";
  import UserIcon from "../../../components/icons/userIcon.svelte";

  let password: string = $state("");
  let username: string = $state("");
  let email: string = $state("");

  async function login() {
    const res = await axiosInstance.post(
      "http://localhost:3000/auth/register",
      {
        username,
        password,
        email,
        surname,
        name,
      }
    );
    window.location.href = "/login";
  }
</script>

<main>
  <div class="flex items-center justify-center min-h-screen">
    <form class="shadow rounded-lg flex flex-col gap-2 p-4">
      <h2 class="text-center font-bold text-xl">Register</h2>
      <label class="input input-bordered flex items-center gap-2 input-primary">
        <UserIcon />
        <input
          type="email"
          class="grow"
          placeholder="Email"
          bind:value={email}
        />
      </label>
      <label class="input input-bordered flex items-center gap-2 input-primary">
        <UserIcon />
        <input
          type="text"
          class="grow"
          placeholder="Username"
          bind:value={username}
        />
      </label>
      <label class="input input-bordered flex items-center gap-2 input-primary">
        <UserIcon />
        <input type="text" class="grow" placeholder="Name" bind:value={name} />
      </label>
      <label class="input input-bordered flex items-center gap-2 input-primary">
        <UserIcon />
        <input
          type="text"
          class="grow"
          placeholder="Surname"
          bind:value={surname}
        />
      </label>
      <label class="input input-bordered flex items-center gap-2 input-primary">
        <PasswordIcon />
        <input
          type="password"
          class="grow"
          placeholder="Password"
          bind:value={password}
        />
      </label>
      <button type="submit" on:click={login} class="btn btn-primary"
        >Register</button
      >
    </form>
  </div>
</main>
