<template>
  <view class="is_login">
    <view class="left">
      <view class="image">
        <image
          mode="widthFix"
          src="http://sq.9yuecloud.com/static/default.jpg"
        ></image>
      </view>
      <view class="desc">
        <view class="tel">{{user.phone}}</view>
        <view class="items">
          <text class="">总发帖:0</text>
          <text class="">今日发帖:0</text>
        </view>
      </view>
    </view>
    <view class="right">
      <my-icon iconName="icon-jinru" iconSize="38" />
    </view>
  </view>
</template>

<script>
export default {
  data(){
    return{
      user:{}
    }
  },
  created(){
    this.user = uni.getStorageSync("user");
    console.log(this.user)
  }
};
</script>

<style lang="scss">
.is_login {
  width: 100%;
  margin-top: 50rpx;
  display: flex;
  justify-content: space-between;
  .left {
    flex: 1;
    display: flex;
    align-items: center;
    .image {
      flex: 1;
      image {
        width: 100%;
        height: 100%;
        border-radius: 50%;
      }
    }
    .desc {
      flex: 5;
      height: 100%;
      flex-direction: column;
      justify-content: space-between;
      text-indent: 20rpx;
      .tel {
        font-size: 38rpx;
        font-weight: bold;
      }
      .items {
        color: #999;
      }
    }
  }
  .right {
    width: 60rpx;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>