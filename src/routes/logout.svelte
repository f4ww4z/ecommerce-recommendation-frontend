<script>
  import { onMount } from 'svelte'
  import { goto } from '@sapper/app'

  onMount(async () => {
    try {
      const res = await fetch('/token', { method: 'DELETE' })
      const result = await res.json()
      console.log(result)

      goto('/login')
      window.location.reload()
    } catch (e) {
      console.log(e.message)
    }
  })
</script>