<script>
    import Bird from "./Bird.svelte";

    const birds = ["Chicken", "Eagle", "parrot"];
    const birdEmoji = ["🐤", "🦅", "🦜"];

    let birdIndex = 0;
    let favoriteBird = birds[birdIndex];
    let favoriteBirdEmoji = birdEmoji[birdIndex]

    function changeBird() {
        console.log("bird changed");
        birdIndex = (birdIndex + 1) % birds.length;
        favoriteBird = birds[birdIndex];
        favoriteBirdEmoji = birdEmoji[birdIndex];
    }

</script>

<h2>Favorite Bird</h2>
<div on:click={changeBird} on:keydown={changeBird}>
<Bird 
    name={birds[birdIndex]} 
    emoji={birdEmoji[birdIndex]} 
/>
</div>

<h2>All birds that i know of</h2>
{#each birds as bird}
    <Bird name={bird} />
    {/each}