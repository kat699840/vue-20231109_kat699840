import { createApp, defineComponent } from './vendor/vue.esm-browser.js';

// Создайте Vue приложение

const App = defineComponent({
    name: 'App',

    data() {
        return {
            count: 0
        }
    },
    methods: {
        myMethod() {
            this.count++
        },
    },
    
})

const app = createApp(App);
const vm = app.mount('#app');