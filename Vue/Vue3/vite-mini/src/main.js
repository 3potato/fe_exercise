

// import {log} from './log.js'
// log('main.js')
// import {ref,watchEffect} from 'vue'

// let count = ref(0)
// watchEffect(()=>{
//   console.log(count.value)
// })

// setInterval(()=>{
//   count.value++

// },1000)

import {createApp} from 'vue'
import App from './App.vue'
import './index.css'

createApp(App).mount('#app')

