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
    all: initial;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    padding: 14px;
    margin: 6px;
    width: 280px;
    background-color: #f0f0f0;
  }

  .root:hover {
    filter: drop-shadow(0 0 .5rem gray);
    cursor: pointer;
    /*animation: fadein 1s;*/
  }

  img {
    width: 100%;
  }

  h2 {
    margin-top: 16px;
  }

  h4 {
    color: #492000;
  }

  h5 {
    color: #681300;
  }
</style>

<a rel="prefetch" class="root" href="/product/{product.id}">
  <img src="/box.png" alt="box">
  <h2>{product.name}</h2>
  <FlexBreak/>
  <h4>Seller: <b>{product.seller}</b></h4>
  <h3><b>RM {product.price}</b></h3>
  <FlexBreak/>
  <h5>{product.category}</h5>
  <FlexBreak/>
</a>
