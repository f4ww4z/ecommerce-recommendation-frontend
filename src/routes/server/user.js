import fetch from 'node-fetch'
import { BASE_URL, jsonHeaders } from '../../util/Constants'

export async function post (req, res) {

  const { username, password, email, firstName, lastName } = req.body

  try {
    const response = await fetch(`${BASE_URL}/users/new`, {
      method: 'POST',
      headers: jsonHeaders({}),
      body: JSON.stringify({
        'username': username,
        'password': password,
        'email': email,
        'first_name': firstName,
        'last_name': lastName,
      }),
    })

    if (!response.ok) {
      throw new Error(response.statusText)
    }

    const newUserData = await response.json()
    res.end(JSON.stringify(newUserData))
  } catch (e) {
    res.end(JSON.stringify({ error: e.message }))
  }
}