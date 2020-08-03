<script>
  export let id;

  // global store
  import listings from "../stores/defaultListings";
  import { link } from "svelte-routing";

  $: listing = $listings.find(item => item.id === parseInt(id));
</script>

<style>
  img {
    width: 400px;
    height: 400px;
  }
</style>

<div class="view-listing">
  <a href="/listings" use:link class="btn btn-primary">back to listings</a>
  <div class="listing">
      <img src={listing.imageurl} alt={listing.address} />
      <h1>{listing.address}</h1>
      <h2>${listing.price}</h2>
  </div>
</div>
