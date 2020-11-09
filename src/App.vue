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
      
        <Button :button="product.onsale" slot="button">
          <button v-if="!product.onsale">Comprar</button>
          <button v-if="product.onsale" class="button-sale">Comprar</button>
        </Button>
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
      sale:"button-sale",
      topBorder:"card-border"
    }
  }
}
</script>

<style>

</style>
