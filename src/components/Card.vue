<template>
  <div class="container">
    <div
      class="card"
      :class="product.onsale ? topBorder : ''"
      v-for="(product, index) in products"
      v-bind:key="index"
    >
      <h1>{{ product.name }}</h1>
      <img v-bind:src="product.imageLink" />
      <p class="price">{{ product.price }}</p>
      <p>{{ product.description }}</p>
      <Button>
        <button :class="product.onsale ? sale : ''">Comprar</button>
      </Button>
      <p>Mais detalhes</p>
    </div>
  </div>
</template>

<script>
import Button from "./Button";
export default {
  name: "Card",
  components: {
    Button,
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
};
</script>

<style scoped>
.container {
  display: flex;
}

.card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  max-width: 300px;
  margin: auto;
  text-align: center;
  font-family: arial;
  padding-bottom: 0.5rem;
  width: 25%;
}

.card-border {
  border-top: .3rem solid green;
}

img {
  width: 100%;
  height: 17rem;
  object-fit: cover;
}

.button {
  background: #76b3fa;
  padding: 0.3rem;
  border-radius: 0.3rem;
  border: none;
  color: #fff;
  text-decoration: none;
  font-size: 1rem;
  margin-bottom: 1rem;
  font-family: "Montserrat", Helvetica, sans-serif;
}

.button-sale {
    background: green;
    color: white;
}

.price {
  color: grey;
  font-size: 22px;
}
</style>
