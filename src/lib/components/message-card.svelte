<script lang="ts">
    import { sessionUser } from "$lib/token";
    import type { Message } from "$lib/types";

    let { message }: { message: Message } = $props();
    let isAuthor = message.username === $sessionUser?.username;
</script>

<div
class={`flex ${
    isAuthor ? "justify-end" : "justify-start"
}`}
>
<div class="max-w-[80%] p-3">
    <div
        class={` rounded-lg p-3 ${
            isAuthor
            ? "bg-primary text-primary-foreground"
            : "bg-muted"
        }`}
    >
        <p>{message.content}</p>
    </div>
    <div class={`flex ${isAuthor ? "justify-end" : "justify-start"}`}>
        <p class="text-xs mt-1 opacity-70 mr-2">
            {message.username}
        </p>
        <p class="text-xs mt-1 opacity-70">
            {new Date(message.date.seconds * 1000).toLocaleString()}
        </p>
    </div>
</div>
</div>