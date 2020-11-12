<template>
  <div id="app">
    <Card>
      <div
      slot="card"
      class="card"
      :class="product.onsale ? topBorder : ''"
      v-for="(product, index) in products"
      v-bind:key="index"
    >
        <h1 slot="prod-name">{{ product.name }}</h1>
        <img slot="prod-img" v-bind:src="product.imageLink" />
        <p slot="prod-price" class="price">{{ product.price }}</p>
        <p slot="prod-descrip">{{ product.description }}</p>
      
        <Button slot="button">
          <button :class="[
            product.onsale ? 'sale' : 'initial',
          ]">Comprar</button>
        </Button>
        <p slot="detalhes">Detalhes</p>
      </div>
    </Card>
  </div>
</template>

<script>
import Card from './components/Card.vue'
import Button from "./components/Button";


export default {
  name: 'App',
  components: {
    Card,
    Button
  },
  computed: {
    products() {
      return this.$store.state.products
    }
  },
  data() {
    return {
      topBorder:"card-border"
    }
  }
}
</script>

<style>

</style>
