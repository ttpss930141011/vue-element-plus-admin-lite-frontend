import { userRegister, setEmail, userLogin, logout, getInfo } from '@/api/user'
import { getToken, setToken, removeToken } from '@/utils/auth'
// import { resetRouter } from '@/router'

const getDefaultState = () => {
  return {
    token: getToken(),
    name: '',
    avatar: ''
  }
}

const state = getDefaultState()

const mutations = {
  RESET_STATE: (state) => {
    Object.assign(state, getDefaultState())
  },
  SET_TOKEN: (state, token) => {
    state.token = token
  },
  SET_NAME: (state, name) => {
    state.name = name
  },
  SET_EMAIL: (state, email) => {
    state.email = email
  },
  SET_AVATAR: (state, avatar) => {
    state.avatar = avatar
  }
}

const actions = {
  // user register
  register({ commit }, userInfo) {
    const { account, password } = userInfo
    return new Promise((resolve, reject) => {
      userRegister({ account: account.trim(), password: password })
        .then((response) => {
          const { data } = response
          console.log(data)
          const { token, name, avatar } = data
          commit('SET_TOKEN', token)
          commit('SET_NAME', name)
          commit('SET_AVATAR', avatar)
          setToken(data.token)
          resolve()
        })
        .catch((error) => {
          console.log(error)
          reject(error)
        })
    })
  },
  // user set email
  setEmail({ commit, state }, email) {
    console.log(commit, state, email)
    return new Promise((resolve, reject) => {
      setEmail({ email: email.trim(), account: state.name })
        .then((response) => {
          const { data } = response
          if (!data) {
            return reject(new Error('Verification failed, please Login again.'))
          }
          const { email } = data
          commit('SET_EMAIL', email)
          resolve(data)
        })
        .catch((error) => {
          console.log(error)
          reject(error)
        })
    })
  },
  // user login
  login({ commit }, userInfo) {
    const { account, password } = userInfo
    return new Promise((resolve, reject) => {
      userLogin({ account: account.trim(), password: password })
        .then((response) => {
          const { data } = response
          const { token, name, avatar, emailIsExist } = data
          commit('SET_TOKEN', token)
          setToken(data.token)
          commit('SET_NAME', name)
          commit('SET_AVATAR', avatar)
          resolve({ emailIsExist: emailIsExist, account: account })
        })
        .catch((error) => {
          console.log(error)
          reject(error)
        })
    })
  },

  // get user info
  getInfo({ commit, state }) {
    return new Promise((resolve, reject) => {
      console.log('getInfo', state.token, state.name)
      getInfo(state.token)
        .then((response) => {
          const { data } = response
          if (!data) {
            return reject(new Error('Verification failed, please Login again.'))
          }
          const { name, avatar } = data
          commit('SET_NAME', name)
          commit('SET_AVATAR', avatar)
          resolve(data)
        })
        .catch((error) => {
          reject(error)
        })
    })
  },

  // user logout
  logout({ commit, state }) {
    return new Promise((resolve, reject) => {
      logout(state.token)
        .then(() => {
          removeToken() // must remove  token  first
          // resetRouter()
          commit('RESET_STATE')
          resolve()
        })
        .catch((error) => {
          reject(error)
        })
    })
  },

  // remove token
  resetToken({ commit }) {
    return new Promise((resolve) => {
      removeToken() // must remove  token  first
      commit('RESET_STATE')
      resolve()
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
