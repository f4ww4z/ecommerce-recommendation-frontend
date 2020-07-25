<script>
  import { stores } from '@sapper/app'
  import FlexBreak from '../components/helpers/FlexBreak.svelte'

  const { session } = stores()

  // create a prop
  export let product

  const handleAddToCart = () => {
    console.log(product)
  }
</script>

<style>
  .root {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
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
  <FlexBreak/>
  <h4>Seller: <b>{product.seller}</b></h4>
  <h3><b>RM {product.price}</b></h3>
  <FlexBreak/>
  <h5>{product.category}</h5>
  <FlexBreak/>
    {#if $session.token}
      <div></div>
      <button class="btn" onclick={handleAddToCart}>Add to Cart</button>
    {/if}
</div>
