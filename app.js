const app = {
    data () {
        return {
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
            ]
        }
    }
}

Vue.createApp(app).mount('#app')