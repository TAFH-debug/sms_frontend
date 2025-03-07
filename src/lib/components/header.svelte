<script lang="ts">
	import { BellIcon, LogOutIcon, SettingsIcon, UserIcon } from "lucide-svelte";
	import { Button } from "$lib/components/ui/button";
	import { Avatar, AvatarFallback, AvatarImage } from "$lib/components/ui/avatar";
	import { logout, sessionUser } from "$lib/token";
	import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "./ui/dropdown-menu";
</script>

<header class="sticky left-0 right-0 top-0 z-50 border-b bg-background/80 backdrop-blur-sm h-[10vh] text-foreground">
	<div class="container mx-auto flex items-center justify-between gap-4 h-full">
		
		<Button variant="link" href="/" class="flex items-center gap-2 m-auto justify-center">
			<span class="text-2xl font-bold">Acme inc</span>
		</Button>

		<!-- actions -->
		<div class="flex items-center gap-2">
			<!-- mobile search and menu
			<div class="flex lg:hidden">
				<Button variant="ghost" size="icon" class="rounded-full">
					<SearchIcon class="h-5 w-5" />
				</Button>
				<Button variant="ghost" size="icon" class="rounded-full" onclick={handleMenuClick}>
					<MenuIcon class="h-5 w-5" />
				</Button>
			</div> -->

			<!-- desktop actions -->
			<div class="hidden lg:flex lg:items-center lg:gap-2">

				{#if $sessionUser}
				<Button variant="ghost" size="icon" class="rounded-full">
					<BellIcon class="h-5 w-5" />
				</Button>
				<DropdownMenu>
					<DropdownMenuTrigger>
						<Avatar>
							<AvatarImage src={$sessionUser.avatar_url} alt="User" />
							<AvatarFallback>CN</AvatarFallback>
						</Avatar>
					</DropdownMenuTrigger>
					<DropdownMenuContent align="end">
						<DropdownMenuLabel>My Account</DropdownMenuLabel>
						<DropdownMenuSeparator />
						<DropdownMenuItem href={`/${$sessionUser.username}`}>
							<UserIcon class="mr-2 h-4 w-4" />
							Profile
						</DropdownMenuItem>
						<DropdownMenuSeparator />
						<DropdownMenuItem class="text-destructive" onclick={logout}>
							<LogOutIcon class="mr-2 h-4 w-4" />
							Log out
						</DropdownMenuItem>
					</DropdownMenuContent>
				</DropdownMenu>
				{:else}
				<Button class="rounded-full" href="/signin">
					Sign In
				</Button>
				{/if}
			</div>
		</div>
	</div>
</header>