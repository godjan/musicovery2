import store from './services/store.js'

export default {
  store,
  install (Vue, options) {
    Vue.prototype.$myStore = store
    //console.log('ok store')
  }
}