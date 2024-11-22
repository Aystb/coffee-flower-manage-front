<template>
  <view class="flex-y">
    this is coffee-manage-flower-front
    <button @click="jumpToHome()">jumpToHome</button>
    <button @click="jumpTomarkets()">jumpTomarket</button>
    <RouterView></RouterView>
  </view>
</template>

<script setup>

import { useAxios } from './axios';
import {useRouter,useRoute,RouterView} from 'vue-router'
const router = useRouter()

function jumpToHome(){
router.push({name:'home'})

}

function jumpTomarkets(){
router.push({name:'markets'})

}
</script>

<style scoped>

</style>
