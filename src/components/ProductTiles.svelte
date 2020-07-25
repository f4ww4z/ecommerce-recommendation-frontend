<script>
  import Product from './Product.svelte'

  export let products

  // console.log(products)
</script>


<style>
  .root {
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
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
