<script lang="ts">
	import Post from '$lib/components/PostCard.svelte';
    interface Post {
        id: number;
        title: string;
        content: string;
    }
    interface Post {
        id: number;
        title: string;
        content: string;
    }
    let title = '';
    let content = '';

</script>

<main>
    <div>
        <div class= "post">
            <h2>{}</h2>
            <p>{}</p>
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