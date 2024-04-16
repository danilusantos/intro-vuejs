const exampleForm = {
    template: `
        <form action="#" method="post" @submit.prevent="saveData">
            <label>
                Nome
                <input v-model="name" type="text" name="name" placeholder="Nome">

                <div v-if="errors.name" v-text="errors.name"></div>
            </label>
            <br>
            <label>
                Gênero
                <select v-model="genero" name="genero">
                    <option value="">Escolha</option>
                    <option value="M">Masculino</option>
                    <option value="F">Feminino</option>
                </select>
            </label>
            <br>
            <label>
                <textarea v-model="description" name="description" placeholder="Descrição"></textarea>
            </label>
            <br>
            <label>
                <input v-model="agree" type="checkbox" name="agree"> Concordo
            </label>
            <br>
            <button type="submit">Enviar</button>
        </form>
    `,

    data () {
        return {
            name: 'Teste',
            genero: '',
            description: '',
            agree: true,

            errors: {
                name: ''
            }
        }
    },

    methods: {
        saveData () {
            this.reset()

            if (this.name === '') {
                this.errors.name = 'Informe um nome'
                return
            }

            console.log(this.name)
            console.log(this.genero)
            console.log(this.description)
            console.log(this.agree)


        },

        reset () {
            this.errors = {
                name: ''
            }
        }
    }
}

app.component('example-form', exampleForm)