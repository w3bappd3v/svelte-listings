<script>
  export let listing;
  const { address, imageurl, price, id, neighborhood, summary } = listing;
  import { link } from "svelte-routing";
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
  ul {
    padding: 0;
    list-style: none;
  }
  .address {
    font-size: 1.25em;
  }
  li {
    font-size: .75em;
  }

</style>

<div class="listing">
  <img src={imageurl} alt={address} />
  <a href={`/listings/${id}`} class="btn btn-primary listing-link" use:link>
     View Listing
  </a>
  <ul class="info">
    <li class="address">{address}</li>
    <li>{neighborhood}</li>
    <li>{price}</li>
    <li>{summary}</li>
  </ul>
</div>
