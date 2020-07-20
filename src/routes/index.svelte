<script>
  import ProductTiles from "../components/ProductTiles.svelte";
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

<svelte:head>
  <title>E-Commerce</title>
</svelte:head>

<h1>E-Commerce app</h1>

<div class="banner">Big Banner</div>

<ProductTiles/>