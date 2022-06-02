import request from '@/utils/request'
import { loginApi, getUserInfoApi, singoutApi } from './api'
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
