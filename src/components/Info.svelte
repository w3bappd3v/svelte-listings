<script>
    export let listing;
    const { address, imageurl, price, id, neighborhood, summary } = listing;
</script>

<style>
     ul {
    padding: 0;
    list-style: none;
  }
  .address {
    font-size: 1.25em;
    color: #000;
  }
  li {
    font-size: .75em;
    color: #8b8b8b;
  }
</style>

<ul class="info">
    <li class="address">{address}</li>
    <li>{neighborhood}</li>
    <li>${price}</li>
    <li>{summary}</li>
  </ul>