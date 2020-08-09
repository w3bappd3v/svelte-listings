<script>
  export let id;

  import listings from "../stores/defaultListings";
  import { link } from "svelte-routing";

  import Info from "../components/Info.svelte";

  $: listing = $listings.find(item => item.id === parseInt(id));
  
</script>

<style>
  .view-listing {
    width: 450px;
    margin: 40px auto;
    box-shadow: -2px -1px 12px 5px #b8b8b8bf;
    border: 1px solid #d4d4d4;
    border-radius: 3px;
    padding: 10px;
  }
  img {
    width: 400px;
    height: 400px;
    display: block;
  }
  .listing {
    margin: 0 auto;
    display: table;
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

<div class="view-listing">
  <div class="listing">
    <a href="/" use:link class="btn btn-primary">back to listings</a>
    <img src={listing.imageurl} alt={listing.address} />
    <Info {listing} />
  </div>
</div>
