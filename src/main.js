// import './assets/main.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'
import 'bootstrap'

import { createApp } from 'vue'
// import store from './store'
import App from './App.vue'
import router from './router'
// import AddItem from './components/AddItem.vue'
// import ViewItems from './components/ViewItems.vue'

const app = createApp(App)

app.use(router)
// app.use(store)

// app.component('add-item', AddItem)
// app.component('view-items', ViewItems)

app.mount('#app')
