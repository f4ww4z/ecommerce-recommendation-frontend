<svelte:head>
  <title>Register | E-Commerce</title>
</svelte:head>

<script>
  import { stores, goto } from '@sapper/app'
  import FlexBreak from '../../components/helpers/FlexBreak.svelte'
  import { jsonHeaders } from '../../util/Constants'

  const { session } = stores()

  let username
  let password = ''
  let confirmPassword = ''
  let email
  let firstName
  let lastName
  let error = ''

  function isRegisterButtonDisabled () {
    return password !== confirmPassword || !!error
  }

  const handleSubmit = async () => {
    if (password !== confirmPassword) {
      return
    }

    let response = await fetch('/user', {
      method: 'POST',
      headers: jsonHeaders({}),
      body: JSON.stringify({
        username, password, email, firstName, lastName,
      })
    })

    let res = await response.json()
    if (!!res.error) {
      error = res.error
      console.log(error)
      return
    }

    console.log('Successfully registered.')

    // Get token and login
    response = await fetch('/auth/token', {
      method: 'POST',
      headers: jsonHeaders({}),
      body: JSON.stringify({ username, password })
    })

    res = await response.json()
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
  .register-box {
    display: flex;
    max-width: 600px;
    flex-flow: row wrap;
    padding: 30px;
    background-color: #ffeede;
  }

  .register-button {
    margin: 16px 8px 0 0;
  }

  .error {
    color: darkred;
  }
</style>

<div class="w-100 register-box">
  <h1>Register</h1>
  <FlexBreak/>
    {#if !!error}
      <h3 class="error">{error}</h3>
      <FlexBreak/>
    {/if}
  <form class="w-100" on:submit|preventDefault={handleSubmit}>
    <label for="username">Username</label>
    <FlexBreak/>
    <input id="username" bind:value={username} type="text" required
           placeholder="Enter username">
    <FlexBreak/>

    <label for="password">Password</label>
    <FlexBreak/>
    <input id="password" bind:value={password} type="password" required
           placeholder="Enter password">
    <FlexBreak/>
    <input bind:value={confirmPassword} type="password" required
           placeholder="Re-enter password">
      {#if password !== confirmPassword}
        <span class="error">Password doesn't match!</span>
      {/if}
    <FlexBreak/>

    <label for="email">Email</label>
    <FlexBreak/>
    <input id="email" bind:value={email} type="email" required
           placeholder="Enter email">
    <FlexBreak/>

    <label for="firstName">First Name</label>
    <FlexBreak/>
    <input id="firstName" bind:value={firstName} type="text" required
           placeholder="Enter first name">
    <FlexBreak/>

    <label for="lastName">Last Name</label>
    <FlexBreak/>
    <input id="lastName" bind:value={lastName} type="text"
           placeholder="Enter last name">
    <FlexBreak/>

    <button class="btn register-button"
            type="submit">
      Register
    </button>
  </form>
</div>
