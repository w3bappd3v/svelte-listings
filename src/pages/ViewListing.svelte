<script>
  export let id;

  import listings from "../stores/defaultListings";
  import { link } from "svelte-routing";
  import { fade } from 'svelte/transition';

  $: listing = $listings.find(item => item.id === parseInt(id));
  
</script>

<style>
  .view-listing {
    width: 450px;
    margin: 40px auto;
    box-shadow: -2px -1px 12px 5px #b8b8b8bf;
    border: 1px solid #8b8b8b;
    border-radius: 3px;
    padding: 10px;
  }
  img {
    width: 400px;
    height: 400px;
    margin: 0 auto;
    display: block;
  }
  ul {
    padding: 0;
    list-style: none;
    width: 50%;
    margin: 0 auto;
  }
  .address {
    font-size: 1.25em;
  }
  li {
    font-size: .75em;
  }
  a {
    margin-left: 23px;
  }
  @media only screen and (max-width: 517px) {
      .view-listing {
        width: 240px;
      }
      img {
        width: 200px;
        height: 200px;
      }
    }
</style>

<div class="view-listing" in:fade="{{delay:500}}">
  <a href="/" use:link class="btn btn-primary">back to listings</a>
  <div class="listing">
      <img src={listing.imageurl} alt={listing.address} />
      <ul class="info">
        <li class="address">{listing.address}</li>
        <li>{listing.neighborhood}</li>
        <li>${listing.price}</li>
        <li>{listing.summary}</li>
      </ul>
  </div>
</div>
