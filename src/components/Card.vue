<template>
  <div class="container">
    <div  :style= "[product.onsale ? {'border-top': '5px solid green'} : {'border-top': 'initial'}]" class="card" v-for="(product, index) in products" v-bind:key="index">
      <h1>{{product.name}}</h1>
      <img v-bind:src="product.imageLink"> 
      <p class="price">{{product.price}}</p>
      <p>{{product.description}}</p>
      <button class="button" v-if="product.onsale === false" v-on:click="addPromo(index)">Adicionar promoção</button>
      <button class="button" v-if="product.onsale === true" v-on:click="addPromo(index)">Remover promoção</button>
      <Button :style= "[product.onsale ? {'background-color': 'green', 'color':'white'} : {'background-color': 'white'}]"/>
      <p>Mais detalhes</p>
    </div>
  </div>
</template>

<script>
import Button from './Button'
export default {
  name: 'Card',
  components: {
    Button
  },
  data() {
    return {
      products: [
        {name: "iPhone",
        imageLink: require('../assets/iphone.jpg'),
        price:"R$3.000,00",
        description: "Lorem Ipson Lorem Jack",
        onsale: false
        },
        {name: "Galaxy S20",
        imageLink: require('../assets/s20.jpg'),
        price:"R$4.000,00",
        description: "Lorem Ipson Lorem Jack",
        onsale: true
        },
        {name: "Oneplus 8",
        imageLink: require('../assets/oneplus.jpg'),
        price:"R$2.000,00",
        description: "Lorem Ipson Lorem Jack",
        onsale: false
        }
      ]
      
    }
  },
  methods: {
    addPromo(index){
      if(this.products[index].onsale === false){

        this.products[index].onsale = true;

      } else {

        this.products[index].onsale = false;

      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
  padding-bottom: .5rem;
  width: 25%;
}

img{
  width: 100%;
  height: 17rem;
  object-fit: cover;
}

.button {
  background: #76B3FA;
  padding: .3rem;
  border-radius: .3rem;
  border: none;
  color: #fff;
  text-decoration: none;
  font-size: 1rem;
  margin-bottom: 1rem;
  font-family: 'Montserrat', Helvetica, sans-serif;
}

.price {
  color: grey;
  font-size: 22px;
}
</style>
