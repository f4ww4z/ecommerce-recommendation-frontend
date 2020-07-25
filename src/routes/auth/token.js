import fetch from 'node-fetch'
import { BASE_URL, jsonHeaders } from '../../util/Constants'

export async function post (req, res) {
  try {
    const { username, password } = req.body

    const response = await fetch(`${BASE_URL}/token`, {
      method: 'POST',
      headers: jsonHeaders({}),
      body: JSON.stringify({ username, password }),
    })

    if (response.status !== 200) {
      res.end(JSON.stringify({ error: 'Invalid credentials' }))
      return
    }

    const data = await response.json()
    // console.log(data)

    const { token } = data

    req.session.token = token
    res.end(JSON.stringify({ token }))
  } catch (e) {
    res.end(JSON.stringify({ error: e.message }))
  }
}

export async function del (req, res) {
  req.session.destroy()

  res.end(JSON.stringify({ message: 'Logged out successfully.' }))
}