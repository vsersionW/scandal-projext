<template>
  <view class="content">
    <!-- height -->
    <view :style="{ height: `${$statusBarHeight}px` }" style="background-color: #fff"></view>
    <!-- header -->
    <view class="header">
      <text></text>
      <text>我的</text>
      <text class="iconfont icon-gengduo1" @click="toSet"></text>
    </view>
    <!-- login -->
    <is-login v-if="!token"></is-login>
    <is-out v-else></is-out>
    <!-- navList -->
    <user-nav-list :navData="navData"></user-nav-list>
    <!-- 操作 -->
    <user-row-item :rowData="rowData"></user-row-item>
  </view>
</template>

<script>
import isLogin from "../../components/login/isLogin";
import isOut from "../../components/login/isOut";
import userNavList from "../../components/user-nav-list";
import userRowItem from "../../components/user-row-item";
export default {
  components: {
    isLogin,
    isOut,
    userNavList,
    userRowItem
  },
  data() {
    return {
      navData:[
        {
          name:"帖子",
          num:0
        },
        {
          name:"动态",
          num:0
        },
        {
          name:"评论",
          num:0
        },
        {
          name:"粉丝",
          num:0
        }
      ],
      rowData:[
        {
          name:"浏览历史",
          icon:"icon-liulan"
        },
        {
          name:"社区认证",
          icon:"icon-huiyuanvip"
        },
        {
          name:"审核帖子",
          icon:"icon-keyboard"
        }
      ],
	  token:""
    };
  },
  methods: {
    toSet(){
	  uni.navigateTo({
	  	url:"../user-set/user-set"
	  })
    }
  },
  onShow(){
    this.token = uni.getStorageSync("token");
	console.log(this.token)
  }
};
</script>

<style lang="scss">
.content {
  padding: 20rpx;
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-weight: bold;
    font-size: 32rpx;
  }
  
}
</style>
