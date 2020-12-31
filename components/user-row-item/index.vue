<template>
  <view>
    <view class="row_item" v-for="(item,index) in rowData" :key="index">
    <view class="left">
      <my-icon :iconName="item.icon"></my-icon>
      <view style="margin-left: 20rpx">{{item.name}}</view>
    </view>
    <view class="right">
      <my-icon iconName="icon-jinru" iconSize="35" iconColor="#999"></my-icon>
    </view>
  </view>
  </view>
</template>

<script>
export default {
  props:{
    rowData:{
      type:Array,
      defalut:()=>[]
    }
  }
};
</script>

<style lang="scss">
.row_item {
  display: flex;
  justify-content: space-between;
  height: 100rpx;
  align-items: center;
  .left {
    display: flex;
    justify-content: flex-start;
    view {
      font-size: 30rpx;
    }
  }
}
</style>