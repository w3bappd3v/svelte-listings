<script>
  import ViewListing from "./pages/ViewListing.svelte";
  import Listings from "./pages/Listings.svelte";

  import { Router, Route, Link } from "svelte-routing";

  import Navbar from "./components/Navbar.svelte";
  import globalStore from "./stores/globalStore";
</script>

<style>
  .app {
    margin: 0 auto;
    max-width: 773px;
  }
  @media only screen and (max-width: 758px) {
    .app {
      max-width: 518px;
    }
    @media only screen and (max-width: 517px) {
      .app {
        max-width: 277px;
      }
    }
}
</style>

<Router>
  <div class="app">
    <Navbar />
    <Route path="/" component={Listings} />
    <Route path="/listings" component={Listings} />
    <Route path="/listings/:id" component={ViewListing} />
  </div>

</Router>
