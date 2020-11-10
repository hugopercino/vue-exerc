import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: [
        {
          name: "iPhone 11 Max",
          imageLink: require("../assets/iphone.jpg"),
          price: "R$3.000,00",
          description: "Lorem Ipson Lorem Jack",
          onsale: false,
        },
        {
          name: "Galaxy S20",
          imageLink: require("../assets/s20.jpg"),
          price: "R$4.000,00",
          description: "Lorem Ipson Lorem Jack",
          onsale: true,
        },
        {
          name: "Oneplus 8",
          imageLink: require("../assets/oneplus.jpg"),
          price: "R$2.000,00",
          description: "Lorem Ipson Lorem Jack",
          onsale: false,
        },
      ]
  }
})

