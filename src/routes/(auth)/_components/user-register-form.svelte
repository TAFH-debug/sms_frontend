<script lang="ts">
    import { goto } from "$app/navigation";
    import { login, register } from "$lib/token";
  import { cn } from "$lib/utils.js";
  import Button from "../../../lib/components/ui/button/button.svelte";
  import { Input } from "../../../lib/components/ui/input";
  import { Label } from "../../../lib/components/ui/label";

  let className: string | undefined | null = undefined;
  export { className as class };

  let password = $state("");
  let username = $state("");
  let email = $state("");
  let name = $state("");
  let surname = $state("");

  let isLoading = $state(false);
  async function onSubmit() {
      isLoading = true;

      await register(username, name, surname, password, email);
      isLoading = false;
      goto("/");
  }


</script>

<div class={cn("grid gap-6")}>
  <form on:submit|preventDefault={onSubmit}>
      <div class="grid gap-2">
          <div class="grid gap-1">
                <Label class="sr-only" for="name">Name</Label>
                <Input
                    id="name"
                    placeholder="name"
                    autocapitalize="none"
                    autocorrect="off"
                    disabled={isLoading}
                    bind:value={name}
                />
                <Label class="sr-only" for="surname">Surname</Label>
                <Input
                    id="surname"
                    placeholder="surname"
                    autocapitalize="none"
                    autocorrect="off"
                    disabled={isLoading}
                    bind:value={surname}
                />
                <Label class="sr-only" for="email">Email</Label>
                <Input
                    id="email"
                    placeholder="email"
                    autocapitalize="none"
                    autocorrect="off"
                    disabled={isLoading}
                    bind:value={email}
                />
                <Label class="sr-only" for="username">Username</Label>
                <Input
                    id="username"
                    placeholder="username"
                    autocapitalize="none"
                    autocomplete="username"
                    autocorrect="off"
                    disabled={isLoading}
                    bind:value={username}
                />
                <Label class="sr-only" for="password">Password</Label>
                <Input
                    id="password"
                    placeholder="password"
                    type="password"
                    autocapitalize="none"
                    autocorrect="off"
                    disabled={isLoading}
                    bind:value={password}
                />
          </div>
          <Button type="submit" disabled={isLoading}>
              Sign In
          </Button>
      </div>
  </form>
  <div class="relative">
      <div class="absolute inset-0 flex items-center">
          <span class="w-full border-t"></span>
      </div>
      <div class="relative flex justify-center text-xs uppercase">
          <span class="bg-background text-muted-foreground px-2"> Or continue with </span>
      </div>
  </div>
  <Button variant="outline" type="button" disabled={isLoading}>
      Google
  </Button>
</div>