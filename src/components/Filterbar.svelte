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
    .filterbar {
        margin-left: 20px;
        margin-bottom: 10px;
    }
    input {
        border-radius: 3px;
        box-shadow: -2px -1px 10px 2px #b8b8b8bf;
    }
    h4 {
        margin-bottom: 5px;
    }
</style>

<div class="filterbar">
    <h4>Type Address:</h4>
    <input bind:value={searchString} on:keyup="{sendSearchString}"/>
</div>