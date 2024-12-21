<script lang="ts">
	import type { Post, User } from '$lib/types';

    interface PageData {
        data: User;
    }

    let props: { data: PageData, post: Post } = $props();
</script>

<main>
    <div>
        <div class= "post">
            <h2>{props.post.author}</h2>
            <p>{props.post.content}</p>
        </div>
    </div>
</main>

<style>
    main {
        max-width: 600px;
        margin: 0 auto;
        font-family: Arial, sans-serif;
        line-height: 1.6;
    }
    .post {
        border: 1px solid #ccc;
        padding: 1rem;
        margin: 1rem 0;
        border-radius: 5px;
        background: #fff;
    }
</style>