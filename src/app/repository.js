const baseUrl = 'https://developers.zomato.com/api/v2.1'
const headers = new Headers()
headers.set('user-key', process.env.REACT_APP_ZOOMATO_API_TOKEN)

export const getRestaurants = (search) => {
  return fetch(
    `${baseUrl}/search?city_id=${search}`,
    { headers: headers })
}

export const getCities = (search) => {
  return fetch(
    `${baseUrl}/cities?q=${search}`,
    { headers: headers })
}
