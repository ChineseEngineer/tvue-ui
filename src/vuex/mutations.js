import { SET_STATUS } from './mutation-types'
export default {
  [SET_STATUS] (state, payload) {
    state.status = payload.status
  }
}
