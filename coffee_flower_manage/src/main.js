import { createApp } from 'vue'

import App from './App.vue'
import router from './router'
import './styles/flex.css' ;
import './styles/color.css' ;
import './styles/margin.css' ;
import './styles/text.css' ;

const app = createApp(App)
app.use(router)
app.mount('#app')
