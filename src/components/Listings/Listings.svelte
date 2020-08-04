<script>
  import { derived } from "svelte/store";
  import listings from "../../stores/defaultListings";
  import Filterbar from "../Filterbar.svelte";
  import Listing from "./Listing.svelte";

  let filteredListings = listings;

  function filterListings (event) {
    let searchStr = event.detail.text.toLowerCase();
    const isnum = /^\d+$/.test(parseInt(event.detail.text));
    if(isnum){
      searchStr = parseInt(event.detail.text);
    }
    filteredListings = derived(listings, $filteredListings => {
      return $filteredListings.filter(x => x.address.toLowerCase().includes(searchStr));
    });
  }

</script>

<style>
  .listings {
    width: 75%;
    display: flex;
    flex-wrap: wrap;
  }
</style>

<Filterbar on:message={filterListings} />
<div class="listings">
  {#each $filteredListings as listing (listing.id)}
    <Listing {listing} />
  {/each}
</div>
