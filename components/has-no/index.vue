<template>
  <view class="has_no">
    <image
      mode="widthFix"
      src="http://sq.9yuecloud.com/static/common/nothing.png"
    ></image>
    <text class="">什么都没有</text>
  </view>
</template>

<script>
export default {};
</script>

<style lang="scss">
.has_no {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  image {
    margin-top: 50rpx;
    width: 250rpx;
    height: auto;
    padding: 10rpx;
    border: 1px solid #eee;
  }
}
</style>