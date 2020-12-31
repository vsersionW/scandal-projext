<template>
  <view class="icon">
        <text class="iconfont" :class='iconName' :style="{fontSize:`${iconSize}rpx`,color:`${iconColor}`}"/>
  </view>
</template>

<script>
export default {
    props:{
        iconName:{
            type:String,
            defalut:""
        },
        iconColor:{
            type:String,
            defalut:"text-danger"
        },
        iconSize:{
            type:[String,Number],
            defalut:45
        }
    }
}
</script>

<style lang="scss">
</style>