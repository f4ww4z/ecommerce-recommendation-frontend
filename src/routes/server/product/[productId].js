import fetch from 'node-fetch'
import { BASE_URL, jsonHeaders } from '../../../util/Constants'

export async function get (req, res) {
  try {
    const { productId } = req.params

    const product = await fetch(`${BASE_URL}/products/${productId}`, {
      method: 'GET',
      headers: jsonHeaders({ token: req.session.token })
    })

    res.end(JSON.stringify(product))
  } catch (e) {
    res.end(JSON.stringify({ error: e.message }))
  }
}