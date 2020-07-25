import fetch from 'node-fetch'
import { BASE_URL, jsonHeaders } from '../../util/Constants'

export async function post (req, res) {

  try {
    // const { refresh } = req.body
    const response = await fetch(`${BASE_URL}/token/refresh`, {
      method: 'POST',
      headers: jsonHeaders({}),
      body: JSON.stringify({ token: req.session.token }),
    })

    if (response.status !== 200) {
      throw new Error('Cannot refresh token.')
    }

    const data = await response.json()
    const { token } = data

    req.session.token = token
    res.end(JSON.stringify({ token }))
  } catch (e) {
    res.end(JSON.stringify({ error: e.message }))
  }
}
