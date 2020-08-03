import { readable } from "svelte/store";
import localListings from "../localListings";
const store = readable(localListings);

export default store;
