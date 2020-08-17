import fetch from 'node-fetch'

const BASE_URL = 'https://ecommerce-recommendation.herokuapp.com/api/v1'

export const makeAPIRequest = async ({ path, method, body, authToken }) => {
  try {
    const response = await fetch(`${BASE_URL}/${path}`, {
      method: method || 'GET',
      headers: jsonHeaders({ authToken }),
      body: body,
    })

    if (!response.ok) {
      throw new Error(response.statusText)
    }

    const result = await response.json()

    return JSON.stringify(result)
  } catch (error) {
    return JSON.stringify({ error: error.message })
  }
}

export const jsonHeaders = ({ authToken }) => {
  return {
    'Content-Type': 'application/json;charset=utf-8',
    'Accept': 'application/json',
    'Authorization': !!authToken ? `Bearer ${authToken}` : '',
  }
}
