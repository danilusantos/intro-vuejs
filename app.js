const app = {
    data () {
        return {
            name: 'Danilo',
            lastName: 'Nascimento dos Santos',
            product: {
                title: 'Série Sobrenatural',
                description: 'Série Sobrenatural com 15 temporadas.',
                image: './img/filme01.jpg'
            },
            product2: {
                title: 'Série Lúcifer',
                description: 'Série Lúcifer com 6 temporadas.',
                image: './img/filme02.jpg'
            }
        }
    }
}

Vue.createApp(app).mount('#app')