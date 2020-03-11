import axios from 'axios'

export default token =>
  axios.interceptors.request.use(request => {
    request.headers.common['Authorization'] = `Bearer ${token}`
    return request
  })
