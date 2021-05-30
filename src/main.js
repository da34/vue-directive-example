import { createApp } from 'vue'
import App from './App.vue'
import loadingDirective from './components/loading/loading'

createApp(App)
.directive('loading', loadingDirective)
.mount('#app')
