
<template>
    <div class="bg-white">
      <div class="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 class="text-2xl font-bold tracking-tight text-gray-900">Customers also purchased</h2>
  
        <div class="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          <div v-for="product in products" :key="product.id" class="group relative"  @click="() => showOverlay(product)">
            <div class="min-h-80 aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80" >
              <img :src="product.imageSrc" :alt="product.imageAlt" class="h-full w-full object-cover object-center lg:h-full lg:w-full" />
              <div v-if="product.showOverlay" class="absolute inset-0 bg-white bg-opacity-80 flex items-center justify-center z-10 ">
                <div class="flex flex-col items-center space-y-4 ">
                  <!-- Nội dung overlay -->
                  <button class="px-6 py-3.5 w-full bg-indigo-600 text-white rounded-3xl shadow-md hover:bg-indigo-400 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">Thêm vào giỏ</button>
                  <button class="px-6 py-3.5 w-full bg-white text-indigo-600 rounded-3xl border border-blue-600 shadow-sm hover:bg-gray-200 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">Xem chi tiết</button>
                </div>
              </div>
            </div>
            <div class="mt-4 flex justify-between">
              <div> 
                <h3 class="text-sm text-gray-700">
                  <a>
                    <span aria-hidden="true" class="absolute inset-0" />
                    {{ product.name }}
                  </a>
                </h3>
                <p class="mt-1 text-sm text-gray-500">{{ product.color }}</p>
              </div>
              <p class="text-sm font-medium text-gray-900">{{ product.price }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import {ref, reactive } from 'vue'
  const products = reactive([
    {
      id: 1,
      name: 'Basic Tee',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
      imageAlt: "Front of men's Basic Tee in black.",
      price: '$35',
      color: 'Black',
      showOverlay: ref(false)
    },
    {
      id: 2,
      name: 'Basic Tee',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
      imageAlt: "Front of men's Basic Tee in black.",
      price: '$35',
      color: 'Black',
      showOverlay: ref(false)
    },
    
  ])
  const showOverlay = (product) => {
  product.showOverlay = !product.showOverlay;
  console.log(product.showOverlay);

}
  </script>