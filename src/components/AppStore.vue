<template>
    <div class="app">
      <div class="container mx-auto h-screen">
      <Header />
      <Carousel />
      <Main />
      <Footer />
    </div>
  </div>
  </template>
  
  <script>
  import Header from './Header.vue'
  import Carousel from './Carousel.vue'
  import Main from './Main.vue'
  import Footer from './Footer.vue'
  
  export default {
    name: 'App',
    components: {
      Header,
      Carousel,
      Main,
      Footer
    },
  
  }
  </script>
  
  <style>
  .app {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }
  
  </style>
  