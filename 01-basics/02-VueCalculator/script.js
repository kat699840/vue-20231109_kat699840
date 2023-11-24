import { createApp, defineComponent } from './vendor/vue.esm-browser.js';

// Создайте Vue приложение
const App = defineComponent({
    name: 'App',

    data() {
        return {
            firstNumber: 0,
            secondNumber: 0,
            operator: null
        }
    },
    computed: {
        result: function () {
            switch (this.operator) {
                case 'sum':
                    return this.firstNumber + this.secondNumber;
                case 'subtract':
                    return this.firstNumber - this.secondNumber;
                case 'multiply':
                    return this.firstNumber * this.secondNumber;
                case 'divide':
                    return this.firstNumber / this.secondNumber;
                case null:
                    return 0
                default:
                    return 'Invalid operator';
            }
        }
    }
    
})

const app = createApp(App);
const vm = app.mount('#app'); 