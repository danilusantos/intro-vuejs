const productDetail = {
    template: `
        <p>{{ product.title }}</p>
        <img v-bind:src="product.image" v-bind:alt="product.title" style="max-width: 150px;">
        <br>
        <span>
            <strong v-if="product.stars > 0">
                {{ product.stars }}
            </strong>
        </span>

        <button
            type="button"
            v-on:click="addCart(product)"
            :disabled="productInCart"
            :class="['color', 'button-enabled', {'button-disabled' : productInCart}]"
            >ADD CART</button>
    `,

    // props: ['product', 'productInCart'],
    props: {
        product: {
            type: Object,
            required: true,
        },
        productInCart: {
            type: Boolean,
            required: true,
        }
    },

    data () {
        return {
            example: 123
        }
    },

    methods: {
        addCart (product) {
            console.log('Add cart in component')
        }
    }
}

app.component('product-detail', productDetail)
