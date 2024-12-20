<script>
    export let data;
</script>

<div class="w-full grid gap-4 grid-cols-3 p-4">
    {#each data.data as club}
    <div class="card shadow-xl bg-neutral">
        <div class="card-body">
            <div class="card-title">
                {club.name}
            </div>
            <p>{club.description}</p>
            <div class="card-actions">
                <button class="btn btn-primary">Apply Now</button>
            </div>
        </div>
    </div>
    {/each}
</div>