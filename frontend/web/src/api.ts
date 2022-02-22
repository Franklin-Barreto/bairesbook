import axios from 'axios'

const api = axios.create({
  baseURL: 'https://bairesbook.herokuapp.com/bairesbook/api',
  timeout: 15000
})

export default api
