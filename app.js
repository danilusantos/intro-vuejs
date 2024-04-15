const app = {
    data () {
        return {
            title: 'Curso de Vue 3',
            name: 'Danilo',
            lastName: 'Nascimento dos Santos',
            products: [
                {
                    title: 'Série Lúcifer',
                    description: 'Série Lúcifer com 6 temporadas.',
                    image: './img/filme02.jpg',
                    stars: 3
                },
                {
                    title: 'Série Sobrenatural',
                    description: 'Série Sobrenatural com 15 temporadas.',
                    image: './img/filme01.jpg',
                    stars: 5,
                }
            ],
            cart: [],
            // textColor: '#fafafa',
            // bgColor: '#1c1c1c'
            styles: {
                backgroundColor: '#1c1c1c',
                color: '#fafafa'
            },
            themeBlack: true
        }
    },
    computed: {
        fullName () {
            return this.name + ' ' + this.lastName
        }
    },
    methods: {
        addCart (product) {
            this.cart.push(product)
        },

        inCart (product) {
            return this.cart.indexOf(product) != -1
        },

        removeCart (product) {
            this.cart = this.cart.filter((prod, index) => product != prod)
        },

        toogleTheme () {
            this.themeBlack = !this.themeBlack;

            if (this.themeBlack) {
                this.styles = {
                    backgroundColor: '#1c1c1c',
                    color: '#fafafa'
                }
            } else {
                this.styles.backgroundColor = '#fafafa'
                this.styles.color = '#1c1c1c'
            }
        }
    }
}

Vue.createApp(app).mount('#app')