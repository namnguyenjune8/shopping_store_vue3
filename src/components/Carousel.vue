<template>
    <div id="default-carousel">
      <Carousel autoplay>
        <!-- Slide 1 -->
        <div>
          <div class="relative h-56 sm:h-64 xl:h-80 2xl:h-96">
            <span class="absolute top-1/2 left-1/2 text-2xl font-semibold text-white transform -translate-x-1/2 -translate-y-1/2">First Slide</span>
            <img src="https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80" 
            class="block absolute top-1/2 left-1/2 w-full transform -translate-x-1/2 -translate-y-1/2" alt="...">
          </div>
        </div>
        <!-- Slide 2 -->
        <div>
          <div class="relative h-56 sm:h-64 xl:h-80 2xl:h-96">
            <img src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg" 
            class="block absolute top-1/2 left-1/2 w-full transform -translate-x-1/2 -translate-y-1/2" alt="...">
          </div>
        </div>
        <!-- Slide 3 -->
        <div>
          <div class="relative h-56 sm:h-64 xl:h-80 2xl:h-96">
            <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg" 
            class="block absolute top-1/2 left-1/2 w-full transform -translate-x-1/2 -translate-y-1/2" alt="...">
          </div>
        </div>
      </Carousel>
    </div>
  </template>
  
    <script setup>
    import { Carousel } from 'ant-design-vue';
    
    </script>
    <style lang="scss">
    
    </style>