<script>
  import Nav from '../components/Nav.svelte'
  import { stores } from '@sapper/app'
  import { onMount } from 'svelte'
  import { jsonHeaders } from '../util/Constants'

  export let segment

  const { session } = stores()
  onMount(async () => {
    // Only refresh when signed in
    if (!!$session.token) {
      const res = await fetch('/auth/refresh', {
        method: 'POST',
        headers: jsonHeaders({}),
      })

      const result = await res.json()
      const { token } = result
      console.log('refreshed')
      console.log(result)
      $session.token = token
    }
  })
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

  :global(.btn:disabled) {
    background-color: #cccccc;
  }

  :global(.w-100) {
    width: 100%;
  }
</style>

<Nav {segment}/>

<main>
  <slot></slot>
</main>