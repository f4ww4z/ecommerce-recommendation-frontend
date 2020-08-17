import { makeAPIRequest } from '../_helpers'

export async function post (req, res) {

  const { username, password } = req.body

  const result = await makeAPIRequest({
    path: 'token',
    method: 'POST',
    body: JSON.stringify({ username, password })
  })

  req.session.token = JSON.parse(result)['token']

  res.end(result)
}

export async function del (req, res) {
  req.session.destroy()

  res.end(JSON.stringify({ message: 'Logged out successfully.' }))
}