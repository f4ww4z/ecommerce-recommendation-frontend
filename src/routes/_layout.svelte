<script>
  import Nav from '../components/Nav.svelte'

  export let segment
</script>

<style>
  main {
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    position: relative;
    width: 100%;
    max-width: 90vw;
    background-color: white;
    padding: 2em;
    margin: 0 auto;
    box-sizing: border-box;
  }

  :global(.btn) {
    border: none;
    border-radius: 10%;
    box-shadow: 1px 2px 1px #cccccc;
    padding: 8px;
    background-color: #d06834;
    color: white;
    font-size: 18px;
  }

  :global(.btn:hover) {
    background-color: #681300;
    cursor: pointer;
  }

  :global(.w-100) {
    width: 100%;
  }
</style>

<Nav {segment}/>

<main>
  <slot></slot>
</main>