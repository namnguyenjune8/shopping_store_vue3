<template>
    <div class="mt-12">
    <a type="button" href="/admin/addproduct" class=" text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        + Thêm sản phẩm</a>
    </div> 
    <div class="mt-12">
    <a @click="logout" type="button"  class=" text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        Logout</a>
    </div>   
    <div class="mx-20 mt-12">
        <ul role="list" class="divide-y divide-gray-100">
    <li v-for="product in products" :key="product.information" class="flex justify-around gap-x-6 py-5 rounded-3xl hover:bg-slate-200 px-4">
      <div class="flex gap-x-4">
        <img class="h-20 w-20 flex-none rounded-xl bg-gray-50" :src="product.imageUrl" alt="" />
        <div class="min-w-0 flex-auto">
          <p class="text-sm font-semibold leading-6 text-gray-900">{{ product.name }}</p>
          <p class="text-sm font-semibold leading-6 text-gray-900 ">{{ product.price }}</p>
          <p class="mt-1 w-64 truncate overflow-hidden text-xs leading-5 text-gray-500">{{ product.information }}</p>
        </div>
       
      </div>
      <div class="hidden sm:flex sm:flex-col sm:items-end">
        <p class="text-sm leading-6 text-gray-900">{{ product.category }}</p>
        <p v-if="product.TimeUp" class="mt-1 text-xs leading-5 text-gray-500">
           <time :datetime="product.TimeUp">{{ product.TimeUp }}</time>
        </p>
        
      </div>
      <div class="flex flex-col justify-center gap-5">
        <a class="h-6 w-12 text-center bg-red-600 rounded-lg ">Sửa</a>
        <a class="h-6 w-12 text-center bg-red-600 rounded-lg ">Xóa</a>
      </div>
    </li>
  </ul>
    </div>
</template>
<script setup>
const products = [
  {
    name: 'Leslie Alexander',
    price: '90000',
    information: 'Thông tin sản phẩm Thông tin sản phẩm Thông tin sản phẩm Thông tin sản phẩm Thông tin sản phẩm Thông tin sản phẩm Thông tin sản phẩm Thông tin sản phẩm ',
    category: 'Áo nữ',
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    TimeUp: '2023-01-23T13:23Z',
  },
  {
    name: 'Michael Foster',
    price: '100000',
    information: 'Thông tin sản phẩm Thông tin sản phẩm Thông tin sản phẩm Thông tin sản phẩm Thông tin sản phẩm Thông tin sản phẩm Thông tin sản phẩm Thông tin sản phẩm',
    category: 'Quần đùi',
    imageUrl:
      'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      TimeUp: '2023-01-23T13:23Z',
  },
  {
    name: 'Dries Vincent',
    price: '1000000',
    information: 'Thông tin sản phẩm Thông tin sản phẩm Thông tin sản phẩm Thông tin sản phẩm Thông tin sản phẩm Thông tin sản phẩm Thông tin sản phẩm Thông tin sản phẩm',
    category: 'Quần dài',
    imageUrl:
      'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    name: 'Lindsay Walton',
    price: '10000000',
    information: 'Thông tin sản phẩm Thông tin sản phẩm Thông tin sản phẩm Thông tin sản phẩm Thông tin sản phẩm Thông tin sản phẩm Thông tin sản phẩm Thông tin sản phẩm',
    category: 'Quần nữ',
    imageUrl:
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      TimeUp: '2023-01-23T13:23Z',
  },
  {
    name: 'Courtney Henry',
    price: '100000000',
    information: 'Thông tin sản phẩm Thông tin sản phẩm Thông tin sản phẩm Thông tin sản phẩm Thông tin sản phẩm Thông tin sản phẩm Thông tin sản phẩm Thông tin sản phẩm',
    category: 'Quần nam',
    imageUrl:
      'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      TimeUp: '2023-01-23T13:23Z',
  },
  {
    name: 'Tom Cook',
    price: '1000000000',
    information: 'Thông tin sản phẩm Thông tin sản phẩm Thông tin sản phẩm Thông tin sản phẩm Thông tin sản phẩm Thông tin sản phẩm Thông tin sản phẩm Thông tin sản phẩm',
    category: 'Áo nữ',
    imageUrl:
      'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
]
const logout = () => {
  localStorage.removeItem('accessToken');
  localStorage.removeItem('userId');
  window.location.href = '/loginadmin';
};
</script>
<style lang="scss">
    
</style>