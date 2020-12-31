<template>
  <view>
    <view class="uni_tabbar" v-for="(item, index) in newList" :key="index">
      <view class="header">
        <view class="left">
          <image mode="widthFix" :src="item.user.userpic"></image>
          <view class="timer">
            <text class="">{{item.user.username}}</text>
            <text class="">下午 {{item.create_time}}</text>
          </view>
        </view>
        <view class="right">
          <view>
            <text>关注</text>
          </view>
        </view>
      </view>
      <view class="title">{{item.content}}</view>
      <view class="swiper_container">
        <image
          mode="widthFix"
          :src="item.titlepic"
        ></image>
      </view>
      <view class="desc">
        <view class="desc_item">
          <my-icon iconName="icon-ccdbaa" iconSize="32"></my-icon>
          <text class="">点赞</text>
        </view>
        <view class="desc_item">
          <my-icon iconName="icon-ccdbaa" iconSize="32"></my-icon>
          <text class="">反对</text>
        </view>
        <view class="desc_item">
          <my-icon iconName="icon-xiaoxi" iconSize="32"></my-icon>
          <text class="">消息</text>
        </view>
        <view class="desc_item">
          <my-icon iconName="icon-fenxiang" iconSize="32"></my-icon>
          <text class="">分享</text>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
export default {
    props:{
        newList:{
            type:Array,
            defalut:()=>[]
        }
    },
    data(){
      return{
        p:{
          "url":"pic"
        }
      }
    }
};
</script>

<style lang="scss">

  .uni_tabbar {
    width: 100%;
    padding: 20rpx;
    box-sizing: border-box;
    border-bottom: 1px solid #eee;
    display: flex;
    flex-direction: column;
    .header {
      display: flex;
      justify-content: space-between;
      flex: 1;
      .left {
        flex: 1;
        display: flex;
        align-items: center;
        .timer{
            display: flex;
            flex-direction: column; 
            text {
                margin-left: 20rpx;
                font-size: 30rpx;
            }
            text:nth-child(2){
                color: #ccc;
                font-size: 22rpx;
            }
        }
        image {
          width: 80rpx;
          height: 80rpx;
          border-radius: 50%;
        }
      }
      .right {
        flex: 1;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        view:nth-child(1) {
          padding: 0 10rpx 7rpx 10rpx;
          border-radius: 7rpx;
          background: $themeColor;
          color: #fff;
        }
      }
    }
    .title {
      flex: 1;
      padding: 15rpx 0 35rpx 0;
      font-size: 30rpx;
    }
    .swiper_container {
      height: 350rpx;
      width: 100%;
      position: relative;
      overflow: hidden;
      image{
          width: 100%;
          display: inline;
          position: absolute;
          left: 0;
          top: -50%;
          transform: translateY(-25%);
      }
    }
    .desc {
      display: flex;
      justify-content: space-around;
      align-items: center;
      line-height: 70rpx;
      height: 70rpx;
      .desc_item{
          flex: 1;
          display: flex;
          justify-content: center;
          align-items: center;
          text{
              margin: 0 10rpx;
              font-size: 32rpx;
          }
      }
    }
  }
</style>