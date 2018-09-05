import { SET_MESSAGE, SET_USERINFO } from '../mutation-types'
import apiList from '@/api/interface'

const state = {
  obj: {
    message: '请输入您的留言'
  },
  userInfo: {
    username: '',
    role: 0
  }
}

const getters = {}
const mutations = {
  [SET_MESSAGE] (state, payload) {
    state.obj.message = payload
  },
  [SET_USERINFO] (state, payload) {
    state.userInfo = payload
  }
}
const actions = {
  getUserInfo ({ commit }, payload) {
    apiList.login(payload).then(res => {
      console.log('vuex.......')
      if (res.code === 0) {
        commit('SET_USERINFO', res.data)
      }
    })
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
