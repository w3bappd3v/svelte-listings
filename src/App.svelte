<script>
  // pages
  import ViewListing from "./pages/ViewListing.svelte";
  import Listings from "./pages/Listings.svelte";
  // router
  import { Router, Route, Link } from "svelte-routing";
  // components
  import Navbar from "./components/Navbar.svelte";
  // global store
  import globalStore from "./stores/globalStore";
</script>

<Router>
  <Navbar />
  <Route path="/" component={Listings} />
  <Route path="/listings" component={Listings} />
  <Route path="/listings/:id" component={ViewListing} />
</Router>
