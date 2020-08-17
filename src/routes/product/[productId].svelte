<script context="module">
  export async function preload (page, session) {
    const { productId } = page.params

    //TODO: get product
    return { productId }
  }
</script>

<script>
  export let productId
</script>

<h1>Product {productId}</h1>