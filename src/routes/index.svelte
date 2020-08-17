<svelte:head>
  <title>Home | E-Commerce</title>
</svelte:head>

<script context="module">
  export async function preload (page, session) {
    const res = await this.fetch(`/server/products`, {
      method: 'GET',
    })
    const parsed = await res.json()

    if (parsed.error) {
      return this.error(res.status, parsed.error)
    }

    return { products: parsed }
  }
</script>

<script>
  import ProductTiles from '../components/ProductTiles.svelte'

  export let products = []
</script>

<style>
  h1 {
    text-align: center;
    margin: 0 auto;
    font-size: 2.8em;
    text-transform: uppercase;
    font-weight: 700;
  }

  .banner {
    width: 100%;
    background-color: #333333;
    color: white;
    height: 300px;
  }
</style>

<h1>E-Commerce app</h1>

<div class="banner">Big Banner</div>

<ProductTiles products={products}/>