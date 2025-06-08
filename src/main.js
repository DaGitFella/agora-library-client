import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

// importação dos ícones
import { OhVueIcon, addIcons } from "oh-vue-icons"
import { BiEyeFill, BiEyeSlashFill } from "oh-vue-icons/icons" // Bootstrap Icons

// registro dos ícones que serão usados
addIcons(BiEyeFill, BiEyeSlashFill)

const app = createApp(App)

app.component("v-icon", OhVueIcon)

app.mount('#app')
