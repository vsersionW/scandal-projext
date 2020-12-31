<template>
  <view class="is_out">
    <view class="top">登录社区体验共多功能</view>
    <view class="bottom" @click="toLogin">
      账号/邮箱/手机登录
      <my-icon iconName="icon-jinru" />
    </view>
  </view>
</template>

<script>
export default {
    methods:{
        toLogin(){
            console.log("toLogin");
			uni.navigateTo({
				url:"../../pages/login/login"
			})
        }
    }
};
</script>

<style lang="scss">
.is_out {
  width: 100%;
  height: 250rpx;
  padding: 20rpx;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  .top {
    font-size: 32rpx;
  }
  .bottom {
    font-size: 28rpx;
    color: #999;
    display: flex;
    align-items: center;
  }
}
</style>