<script>
    import { createEventDispatcher } from 'svelte';

    const dispatch = createEventDispatcher();
    let searchString = ' ';

    function sendSearchString(event) {
        dispatch('message', {
            text: searchString
        });
    }
</script>

<style>

</style>

<div class="filterbar">
    Filter:
    <input bind:value={searchString} on:keyup="{sendSearchString}"/>
    <p>{searchString}</p>
</div>