<template>
  <view class="nav_list">
      <view class="nav_item" v-for="(item,index) in navData" :key="index">
        <view class="num">{{item.num}}</view>
        <view class="name">{{item.name}}</view>
      </view>
    </view>
</template>

<script>
export default {
    props:{
      navData:{
        type:Array,
        defalut:()=>[]
      }
    }
}
</script>

<style lang="scss">
.nav_list{
    width: 100%;
    display: flex;
    justify-content: space-around;
    margin-bottom: 10rpx;
    .nav_item{
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      line-height: 150rpx;
      .num{
        font-weight:bold;
        font-size: 35rpx;
      }
      .name{
        font-size: 30rpx;
        margin-top: 10rpx;
        color: #999;
      }
    }
  }
</style>