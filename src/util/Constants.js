export const BASE_URL = 'https://ecommerce-recommendation.herokuapp.com/api/v1'

export const jsonHeaders = ({ token }) => {
  return {
    'Content-Type': 'application/json;charset=utf-8',
    'Accept': 'application/json',
    'Authorization': !!token ? `Bearer ${token}` : '',
  }
}