import { SET_MESSAGE } from '../mutation-types'

const state = {
  obj: {
    message: '请输入您的留言'
  }
}

const getters = {}
const mutations = {
  [SET_MESSAGE] (state, payload) {
    state.obj.message = payload
  }
}
const actions = {}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
