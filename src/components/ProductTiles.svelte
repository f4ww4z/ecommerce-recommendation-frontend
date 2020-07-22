<script>
  import Product from './Product.svelte'

  export let products
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
