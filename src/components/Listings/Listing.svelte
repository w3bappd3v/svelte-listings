<script>
  export let listing;
  
  import { link } from "svelte-routing";
  import { fade } from 'svelte/transition';
  
  import Info from "../Info.svelte";

  const { address, imageurl, price, id, neighborhood, summary } = listing;
</script>

<style>
  .listing {
    width: 200px;
    height: fit-content;
    border: 1px solid #8b8b8b;
    border-radius: 3px;
    margin: 20px 10px;
    padding: 10px;
    box-shadow: -2px -1px 12px 5px #b8b8b8bf;
  }

  img {
    width:200px;
    height: 200px;
  }
</style>

<div class="listing" transition:fade>
  <img src={imageurl} alt={address} />
  <a href={`/listings/${id}`} class="btn btn-primary listing-link" use:link>
     View Listing
  </a>
  <Info {listing} />
</div>
