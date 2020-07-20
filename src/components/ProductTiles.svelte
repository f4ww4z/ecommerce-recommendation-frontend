<script>
  import {onMount} from "svelte";
  import Product from "./Product.svelte";
  import {BASE_URL} from "../util/Constants.js";

  let products;

  onMount(async () => {
    let res = await fetch(`${BASE_URL}/products`);
    products = await res.json();
    console.log(products);
  });
</script>

<style>
  .root {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-evenly;
  }
</style>

{#if products}
  <div class="root">
      {#each products as product}
          <Product {product}/>
      {/each}
  </div>
{:else}
  <p>Loading...</p>
{/if}
