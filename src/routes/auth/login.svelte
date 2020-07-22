<svelte:head>
  <title>Login | E-Commerce</title>
</svelte:head>

<script>
  import { stores, goto } from '@sapper/app'
  import FlexBreak from '../../components/helpers/FlexBreak.svelte'
  import { jsonHeaders } from '../../util/Constants'

  const { session } = stores()

  let username
  let password
  let error

  const handleSubmit = async () => {

    const response = await fetch('/auth/token', {
      method: 'POST',
      headers: jsonHeaders({}),
      body: JSON.stringify({ username, password })
    })

    const res = await response.json()
    if (!!res.error) {
      error = res.error
      console.log(error)
      return
    }

    const { token } = res
    $session.token = token
    goto('/')
  }
</script>

<style>
  .login-box {
    display: flex;
    flex-flow: column nowrap;
    padding: 30px;
    background-color: #ffeede;
  }

  .login-button {
    margin: 16px 8px 0 0;
  }

  .error {
    color: darkred;
  }
</style>

<div class="login-box">
  <h1>Login</h1>
    {#if !!error}
      <h3 class="error">{error}</h3>
    {/if}
  <form on:submit|preventDefault={handleSubmit}>
    <label for="username">Username</label>
    <FlexBreak/>
    <input id="username" bind:value={username} type="text"
           placeholder="Enter username">
    <FlexBreak/>
    <label for="password">Password</label>
    <FlexBreak/>
    <input id="password" bind:value={password} type="password"
           placeholder="Enter password">
    <FlexBreak/>
    <button class="btn login-button" type="submit">Login</button>
  </form>
</div>