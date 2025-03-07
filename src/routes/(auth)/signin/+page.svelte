<script lang="ts">
  import axiosInstance from "$lib/axios";
  import PasswordIcon from "../../../lib/components/icons/passwordIcon.svelte";
  import UserIcon from "../../../lib/components/icons/userIcon.svelte";
  import { Button } from "$lib/components/ui/button";
  import UserAuthForm from "../_components/user-auth-form.svelte";
  import SideImg from "../_components/side-img.svelte";
  import UserRegisterForm from "../_components/user-register-form.svelte";

  let password: string = $state("");
  let username: string = $state("");
  let email: string = $state("");
  let name: string = $state("");
  let surname: string = $state("");

  async function login() {
    const res = await axiosInstance.post(
      "/auth/register",
      {
        username,
        password,
        email,
        surname,
        name,
        firebaseId: "id"
      }
    );
    window.location.href = "/login";
  }
</script>

<div
	class="container relative hidden h-[800px] flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0"
>
	<SideImg />
	<div class="lg:p-8">
		<div class="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
			<div class="flex flex-col space-y-2 text-center">
				<h1 class="text-2xl font-semibold tracking-tight">Log in</h1>
				<p class="text-muted-foreground text-sm">
					Enter your email below to log in your account
				</p>
			</div>
			<UserAuthForm />
			<p class="text-muted-foreground px-8 text-center text-sm">
				Don&apos;t have an account?{" "}
        <a href="/signup" class="hover:text-primary underline underline-offset-4">
          Sign up
        </a>
      </p>
		</div>
	</div>
</div>