import { makeAPIRequest } from './_helpers'

export async function get (req, res) {
  const result = await makeAPIRequest({
    path: 'products',
    authToken: req.session.token
  })

  res.end(result)
}