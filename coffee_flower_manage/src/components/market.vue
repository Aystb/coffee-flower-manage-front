<template>
    <view class="flex-x border-15 bg-yellow1 pd-20">
    <view >
    {{ market.market_name }}
    </view>

<view class="flex-y ml-10">

    <view>
        <view class="flex-x wd-100">
<text class="flex-grow1">品类</text>
<text class="ml-10 flex-grow1">最高</text>
<text class="ml-10 flex-grow1">最低</text>
<text class="ml-10 flex-grow1">平均</text>
</view> </view>
<view v-for="(item,index) in market.market_items" :key="index">
<view class="flex-x">
<text >{{ item.type }}</text>
<text class="ml-10">{{ item.maxPrice }}</text>
<text class="ml-10">{{ item.minPrice }}</text>
<text class="ml-10">{{ item.averagePrice }}</text>
</view>

</view>

</view>
    </view>
</template>
<script setup>

const props = defineProps({
    market:{
        type:Object,
        default:{
      market_name: "市场A",
      market_items: [
        {
          type: "卡迪姆A类",
          maxPrice: 4.23,
          minPrice: 2.23,
          averagePrice: 3.56
        },
        {
          type: "卡迪姆B类",
          maxPrice: 4.23,
          minPrice: 2.23,
          averagePrice: 3.56
        }
      ]
    },
    }
})

</script>

<style scoped>


</style>