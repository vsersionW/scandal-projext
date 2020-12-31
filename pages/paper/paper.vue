<template>
  <view class="content">
    <view :style="{ height: `${$statusBarHeight}` }"></view>
    <!-- header组件 -->
    <paper-header
      :dataList="header"
      v-on:openRight="openRight"
      v-on:openLeft="openLeft"
    ></paper-header>

    <view style="margin-top: 30rpx"></view>

    <!-- 小纸条 -->
    <view style="padding: 10rpx">
      <paper-header
      :dataList="nav"
      v-on:openRight="openRight"
      v-on:openLeft="openLeft"
    ></paper-header>
    </view>

    <!-- 没有更多了 -->
    <has-no></has-no>

    <!-- 右侧弹出框 -->
    <uni-popup ref="right" type="top">
      <view class="top">
        <text class="iconfont icon-sousuo"></text>
        <text class="">添加好友</text>
      </view>
      <view class="bottom">
        <text class="iconfont icon-shanchu"></text>
        <text class="">清除列表</text>
      </view>
    </uni-popup>
  </view>
</template>

<script>
import paperHeader from "../../components/paper-header";
import uniPopup from "../../components/uni-popup/uni-popup.vue";
import hasNo from "../../components/has-no";
export default {
  components: {
    paperHeader,
    uniPopup,
    hasNo,
  },
  data() {
    return {
      header: {
        iconName: "icon-user_icon",
        iconSize: 35,
        iconName2: "icon-saoyisao",
        title: "消息列表",
      },
      nav: {
        iconName: "icon-user-detail",
        iconSize: 35,
        iconName2: "icon-zengjia",
        title: "小纸条",
      },
    };
  },
  methods: {
    openLeft() {
		uni.navigateTo({
			url:"../user-list/user-list"
		})
    },
    openRight() {
      this.$refs.right.open();
    },
  },
};
</script>

<style lang="scss">
.content {
  padding: 10rpx;
  .top,
  .bottom,.top {
    width: 100%;
    height: 100rpx;
    background: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
	font-size: 32rpx;
    text {
      margin: 0 10rpx;
    }
  }
  .top{
	  margin-top: 30rpx;
	  border-bottom: 1px solid #eee;
  }
}
</style>
