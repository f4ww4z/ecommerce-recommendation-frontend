<script>
  import { stores } from '@sapper/app'
  import jwtDecode from 'jwt-decode'

  export let segment

  const { session } = stores()

  let jwtToken = ''
  let username = ''

  session.subscribe(value => {
    jwtToken = value.token
    if (!!jwtToken) {
      username = jwtDecode(jwtToken)['username']
    }
  })

</script>

<style>
  nav {
    border-bottom: 1px solid rgba(255, 62, 0, 0.1);
    font-weight: 300;
    padding: 0 1em;
    display: flex;
    justify-content: space-between;
  }

  ul {
    margin: 0;
    padding: 0;
  }

  /* clearfix */
  ul::after {
    content: "";
    display: block;
    clear: both;
  }

  li {
    display: block;
    float: left;
  }

  [aria-current] {
    position: relative;
    display: inline-block;
  }

  [aria-current]::after {
    position: absolute;
    content: "";
    width: calc(100% - 1em);
    height: 2px;
    background-color: rgb(255, 62, 0);
    display: block;
    bottom: -1px;
  }

  a {
    text-decoration: none;
    padding: 1em 0.5em;
    display: block;
  }

  .shopping-cart {
    width: 24px;
  }
</style>

<nav>
  <ul>
    <li>
      <a aria-current={segment === undefined ? 'page' : undefined} href=".">
        Home
      </a>
    </li>
    <li>
      <a aria-current={segment === 'about' ? 'page' : undefined} href="about">
        About
      </a>
    </li>
  </ul>
  <ul>
      {#if !!jwtToken}
        <li>
          <a href="cart">
            <img class="shopping-cart" src="/cart.png" alt="shopping cart icon">
          </a>
        </li>
        <li>
          <a rel="prefetch"
             aria-current={segment === 'dashboard' ? 'page' : undefined}
             href="dashboard">
              {username}
          </a>
        </li>
        <li>
          <a rel="prefetch"
             aria-current={segment === 'logout' ? 'page' : undefined}
             href="auth/logout">
            Log out
          </a>
        </li>
      {:else}
        <li>
          <a rel="prefetch"
             aria-current={segment === 'login' ? 'page' : undefined}
             href="/auth/login">
            Log in
          </a>
        </li>
        <li>
          <a rel="prefetch"
             aria-current={segment === 'register' ? 'page' : undefined}
             href="/auth/register">
            Register
          </a>
        </li>
      {/if}
  </ul>
</nav>
