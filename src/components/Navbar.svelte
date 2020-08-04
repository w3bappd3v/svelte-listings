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
  }

  ul li {
    margin: 0 5px;
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

