<script>
  import { onMount } from 'svelte'
  import { goto, stores } from '@sapper/app'

  const { session } = stores()

  onMount(async () => {
    try {
      $session.token = ''
      const res = await fetch('/auth/token', { method: 'DELETE' })
      const result = await res.json()
      console.log(result)

      goto('/auth/login')
      // window.location.reload()
    } catch (e) {
      console.log(e.message)
    }
  })
</script>