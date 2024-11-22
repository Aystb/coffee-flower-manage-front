<template>
    <view class="flex-y">
        this is markets
        <view> 
<market :market="item" v-for="(item,index) in markets" :key="index"></market>

        </view>
        <view>这里是前端从api拿到的裸露的数据</view>
        <view>{{ markets }}</view>
    </view>
</template>
<script setup>
import { useAxios } from '../axios';
import market from '../components/market.vue';
import {ref,onMounted} from 'vue'
//模拟日期的id
const id = ref(1)
const markets = ref()
//建立axios的使用实例
const { makeRequest, loading, error } = useAxios();

//在组件挂载的时候拿数据
onMounted(async ()=>{
    //useAxios里面封装的函数
   const res = await makeRequest({
        method: 'GET',
        url: `http://127.0.0.1:4523/m1/4020303-0-default/coffee/${id}/getMarketsPerDay`,
        body: {  },
      });
 markets.value = res.data.markets
 

})

</script>

<style scoped>

</style>