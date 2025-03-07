<script lang="ts">
    import { ChevronDown, Plus, Send } from "lucide-svelte";
    import { Button } from "./ui/button";

    import { Input } from "./ui/input";
    import { addDoc, collection, onSnapshot } from "firebase/firestore";
    import { firestore } from "$lib/firebase";
    import type { Channel, Message } from "$lib/types";
    import MessageCard from "./message-card.svelte";
    import { sessionUser } from "$lib/token";

    let props: Channel = $props();

    let elem: any;
    let input = $state("");
    let messages: Message[] = $state([]);

    let chat = collection(firestore, props.path);

    let unsubscribe = onSnapshot(chat, (querySnapshot) => {
        const newArr: Message[] = [];
        querySnapshot.forEach((doc) => {
            newArr.push(doc.data() as Message);
        });
        newArr.sort((a, b) => a.date.seconds - b.date.seconds);
        messages = newArr;
    });

    function sendAction() {
        addDoc(chat, { content: input, date: new Date(), username: $sessionUser?.username });
        input = "";
    }

    $effect(() => {
        chat = collection(firestore, props.path);
        
        unsubscribe();

        unsubscribe = onSnapshot(chat, (querySnapshot) => {
            const newArr: Message[] = [];
            querySnapshot.forEach((doc) => {
                newArr.push(doc.data() as Message);
            });
            newArr.sort((a, b) => a.date.seconds - b.date.seconds);
            messages = newArr;
        });
    });



    $effect(() => {
        messages;
        elem.scrollTop = elem.scrollHeight;
    });
</script>

<div class="flex-1 flex flex-col h-[90vh]">
<div class="p-4 border-b flex items-center justify-between">
    <h2 class="text-xl font-semibold">{props.name}</h2>
    <Button variant="ghost" size="icon">
    <ChevronDown size={18} />
    </Button>
</div>

<div class="flex-1 overflow-auto p-4 space-y-6" bind:this={elem}>
    {#each messages as msg}
    <MessageCard message={msg} />
    {/each}
</div>

<div class="p-4 border-t">
    <div class="flex items-center gap-2">
    <Input 
        placeholder={`Message ${props.name}`} 
        class="flex-1"
        bind:value={input}
    />
    <Button variant="ghost" size="icon">
        <Plus size={18} />
    </Button>
    <Button onclick={sendAction}>
        <Send size={18} />
        <span class="ml-2">Send</span>
    </Button>
    </div>
</div>
</div>