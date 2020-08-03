<script>
  import listings from "../../stores/defaultListings";
  import Listing from "./Listing.svelte";
</script>

<style>
  .listings {
    width: 75%;
    display: flex;
    flex-wrap: wrap;
  }
</style>

<div class="listings">
  {#each $listings as listing (listing.id)}
    <Listing {listing} />
  {/each}
</div>
