import getters from './getters'
const state = {
  header: true,
  loading: false,
  footerShow: true
}
const mutations = {
  showHeader(state) {
    state.header = true
  },
  hideHeader(state) {
    state.header = false
  },
  showLoading(state) {
    state.loading = true
  },
  hideLoading(state) {
    state.loading = false
  },
  hideFooter(state) {
    state.footerShow = false
  },
  showFooter(state) {
    state.footerShow = true
  }
}
export default {
  state,
  mutations,
  getters
}
