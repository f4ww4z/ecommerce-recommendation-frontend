import fetch from 'node-fetch'
import { BASE_URL, jsonHeaders } from '../../../util/Constants'
import { makeAPIRequest } from '../_helpers'

export async function post (req, res) {

  const oldToken = req.session.token
  const result = await makeAPIRequest({
    path: 'token/refresh',
    method: 'POST',
    body: JSON.stringify({ token: oldToken }),
    authToken: oldToken,
  })

  // new token
  req.session.token = JSON.parse(result)['token']

  res.end(result)
}
