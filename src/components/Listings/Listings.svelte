<script>
  import { derived } from "svelte/store";
  import listings from "../../stores/defaultListings";
  import Filterbar from "../Filterbar.svelte";
  import Listing from "./Listing.svelte";

  let filteredListings = listings;

  function filterList (event) {
    let strToMatch = event.detail.text.toLowerCase().replace(/\s/g, '');
    let numCount = 0;
    for(let i=1; i<strToMatch.length; i++){
      if(/^\d+$/.test(strToMatch[i])){
        numCount++;
      }
    }
    if(numCount == strToMatch.length-1){
      strToMatch = parseInt(strToMatch);
    }
    filteredListings = derived(listings, $filteredListings => {
      return $filteredListings.filter(x => x.address.toLowerCase().includes(strToMatch));
    });
  }
</script>

<style>
  .listings {
    display: flex;
    flex-wrap: wrap;
  }
</style>

<Filterbar on:message={filterList} />
<div class="listings">
  {#each $filteredListings as listing (listing.id)}
    <Listing {listing} />
  {/each}
</div>
