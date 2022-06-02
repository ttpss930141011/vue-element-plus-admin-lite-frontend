import request from '@/utils/request'
import { registerApi, loginApi, setEmailApi, getUserInfoApi, singoutApi } from './api'
// export function userLogin (data) {
//   return request({
//     url: '/vue-admin-template/user/login',
//     method: 'post',
//     data
//   })
// }

// export function getInfo (token) {
//   return request({
//     url: '/vue-admin-template/user/info',
//     method: 'get',
//     params: { token }
//   })
// }

// export function logout () {
//   return request({
//     url: '/vue-admin-template/user/logout',
//     method: 'post'
//   })
// }
export function userRegister(data) {
  return request({
    url: registerApi,
    method: 'post',
    data
  })
}

export function setEmail(data) {
  return request({
    url: setEmailApi,
    method: 'post',
    data
  })
}

export function userLogin(data) {
  return request({
    url: loginApi,
    method: 'post',
    data
  })
}

export function getInfo(token) {
  return request({
    url: getUserInfoApi,
    method: 'get',
    params: { token }
  })
}

export function logout() {
  return request({
    url: singoutApi,
    method: 'post'
  })
}
