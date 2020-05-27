import axios from 'axios'
const baseUrl = process.env.REACT_APP_DEV_API || '' 
const apiUrl = baseUrl + '/api/notes' || '/api/notes'

let token = null

const setToken = newToken => {
  token = `bearer ${newToken}`
}

const getAll = async () => {
  const response = await axios.get(apiUrl)
  return response.data
}

const create = async newObject => {
  const config = {
    headers: { Authorization: token },
  }
  const response = await axios.post(apiUrl, newObject, config)
  return response.data
}

const update = async (id, newObject) => {
  const response = await axios.put(`${apiUrl}/${id}`, newObject)
  return response.data
}

export default { getAll, create, update, setToken }
