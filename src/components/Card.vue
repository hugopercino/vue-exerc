<template>
  <div class="container">
    
    <slot name="card">
      <slot name="prod-name"></slot>
      <slot name="prod-img"></slot>
      <slot name="prod-price"></slot>
      <slot name="prod-descrip"></slot>
      <slot name="button"></slot>
    </slot>
      <p>Mais detalhes</p>
  </div>
  
</template>

<script>
export default {
  name: "Card"
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

.price {
  color: grey;
  font-size: 22px;
}
</style>
