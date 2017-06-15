import 'es6-promise/auto'
import Vue from 'vue'
import App from './pages/App.vue'
import storeFactory from './store'
import router from './router'
import { sync } from 'vuex-router-sync'

const store = storeFactory()

const app = new Vue(Object.assign({
    router,
    store
}, App))

app.$mount('#app')

export { app, router, store }
