import axios from 'axios'
import qs from 'qs'

let axiosInstance = axios.create({
  baseURL: process.env.BASE_URL, // 通过配置文件设置接口请求根路径，可区分开发、测试、生产环境
  withCredentials: false, // 请求是否携带cookie信息
  timeout: 1000 * 30, // 请求超时设置 30秒
  headers: {
    'Content-Type': 'application/json; charset=UTF-8'
  }
})

// 请求拦截，可在请求headers附带鉴权信息，如：token
axiosInstance.interceptors.request.use(config => {
  let token = null
  if (token) {
    config.headers['X-token'] = token
  }
  return config
}, error => {
  return Promise.reject(error)
})

// 响应拦截
axiosInstance.interceptors.response.use(response => {
  let data = response.data
  let code = data.code
  // 异常处理和提示 begin *********************************/
  if (code !== 0) {
    let msg = data.message
    switch (code) {
      case 401:
        console.log('请重新登录...')
        break
      default:
    }
    console.log(`异常提示：${msg}`)
  }
  // 异常处理和提示 end ***********************************/
  return data
}, error => {
  // 处理http状态
  if (error && error.response) {
    let status = error.response.status
    switch (status) {
      case 400:
        error.message = '请求错误'
        break
      case 401:
        error.message = '未授权，请登录'
        break
      case 403:
        error.message = '拒绝访问'
        break
      case 404:
        error.message = `请求地址出错: ${error.response.config.url}`
        break
      case 408:
        error.message = '请求超时'
        break
      case 500:
        error.message = '服务器内部错误'
        break
      case 501:
        error.message = '服务未实现'
        break
      case 502:
        error.message = '网关错误'
        break
      case 503:
        error.message = '服务不可用'
        break
      case 504:
        error.message = '网关超时'
        break
      case 505:
        error.message = 'HTTP版本不受支持'
        break
      default:
    }
    console.log(error.message)
  }
  return Promise.reject(error)
})

// Get 请求封装
export const get = (url, params, options = {}) => {
  let configs = Object.assign({
    method: 'get',
    url,
    params
  }, options)
  return axiosInstance(configs)
}

// Post 请求封装
export const post = (url, params, options = {}) => {
  let configs = Object.assign({
    method: 'post',
    url,
    data: params
  }, options)
  return axiosInstance(configs)
}

// postForm 请求封装
export const postForm = (url, params, options = {}) => {
  let configs = Object.assign({
    method: 'post',
    url,
    data: qs.stringify(params),
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  }, options)
  return axiosInstance(configs)
}

// fetch 封装
export const fetch = (url, params, options = {}) => {
  let configs = Object.assign({}, options)
  return axiosInstance(configs)
}
