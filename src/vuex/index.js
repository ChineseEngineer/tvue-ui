import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import getters from './getters'
import mutations from './mutations'
import actions from './actions'
import moduleA from './modules/moduleA'
import home from './modules/home'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  state: {
    status: false
  },
  getters,
  mutations,
  actions,
  modules: {
    moduleA,
    home
  },
  strict: debug,
  plugins: [createPersistedState(
    { storage: window.sessionStorage }
  )]
})
