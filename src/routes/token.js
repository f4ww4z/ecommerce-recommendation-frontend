import fetch from 'node-fetch'
import { BASE_URL, headersWithToken } from '../util/Constants'

export async function post (req, res) {
  try {
    const { username, password } = req.body

    const response = await fetch(`${BASE_URL}/token`, {
      method: 'POST',
      headers: headersWithToken({}),
      body: JSON.stringify({ username, password }),
    })

    if (response.status !== 200) {
      res.end(JSON.stringify({ error: 'Invalid credentials' }))
      return
    }

    const data = await response.json()
    // console.log(data)

    const { access, refresh } = data

    req.session.token = access
    res.end(JSON.stringify({ token: access, refresh: refresh }))
  } catch (e) {
    res.end(JSON.stringify({ error: e.message }))
  }
}

export async function del (req, res) {
  req.session.destroy()

  res.end(JSON.stringify({ message: 'Logged out successfully.' }))
}