<template>
    <div>
      <Header/>
      <ProductIntro/>
      <ProductList/>
      <Footer/>
    </div>
  </template>
  
  <script>
  import Header from '../products/Header.vue'
  import ProductIntro from '../products/ProductIntro.vue'
  import ProductList from '../products/ProductList.vue'
  import Footer from '../products/Footer.vue'
  
  export default {
    name: 'Main',
    components: {
      Header,
      ProductIntro,
      ProductList,
      Footer
    }
  }
  </script>
  
  <style scoped>
  /* Các style cho component Main */
  </style>
  