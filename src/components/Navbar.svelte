<script>
  import { link } from "svelte-routing";
  import links from "../constants/links";
  import globalStore from "../stores/globalStore";
</script>

<style>
  ul {
    display: flex;
    justify-content: flex-start;
    list-style: none;
    margin: 0 0 0 11px;
    padding: 0;
  }
</style>

<nav>
  <ul>
    {#each links as navLink}
      <li>
        <a href={navLink.url} use:link>{navLink.text}</a>
      </li>
    {/each}
  </ul>
</nav>

