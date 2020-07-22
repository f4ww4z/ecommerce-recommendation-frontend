<script>
  // create a prop
  export let product
</script>

<style>
  .root {
    padding: 14px;
    margin: 6px;
    width: 280px;
    background-color: #f0f0f0;
  }

  img {
    width: 100%;
  }

  h4 {
    color: #492000;
  }

  h5 {
    color: #681300;
  }
</style>

<div class="root">
  <img src="/box.png" alt="box">
  <h2>{product.name}</h2>
  <h4>Seller: <b>{product.seller}</b></h4>
  <h5>{product.category}</h5>
</div>
