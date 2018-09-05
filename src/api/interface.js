import { get, post } from './fetch'

export default {
  login (params) {
    let options = {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'X-token': 'XXXXXX-FFFFFFF-DDDDDDDDDD'
      }
    }
    return get('http://172.31.82.39:8081/', params, options)
  },
  loginAppWithCode (params) {
    let options = {
      headers: {
        'X-token': 'XXXXXX-FFFFFFF-999999'
      }
    }
    return post('/loginAppWithCode', params, options)
  }
}
