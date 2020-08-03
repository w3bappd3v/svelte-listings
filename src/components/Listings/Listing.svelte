<script>
  export let listing;
  const { address, imageurl, price, id } = listing;
  import { link } from "svelte-routing";
</script>

<style>
  .listing {
    width: 200px;
    height: fit-content;
    border: 1px solid #8b8b8b;
    margin: 20px 10px;
  }

  img {
    width:200px;
    height: 200px;
  }
</style>

<div class="listing">
  <img src={imageurl} alt={address} />
  <a href={`/listings/${id}`} class="btn btn-primary listing-link" use:link>
     View Listing
  </a>
  <div class="info">
    <p class="address">{address}</p>
    <p class="price">${price}</p>
  </div>
</div>
