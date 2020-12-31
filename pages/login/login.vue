<template>
  <view class="content">
    <view :style="{ height: `${$statusBarHeight}px` }" style="background-color: #fff"></view>
	<!-- 回到上一页 -->
    <view @click="goBack">
      <my-icon iconName="icon-guanbi" iconSize="40" />
    </view>
	<!-- 切换登录状态 -->
	<login-item :loginData="loginData"></login-item>
  </view>
</template>

<script>
import loginItem from "../../components/login-item";
export default {
  components:{
	  loginItem
  },
  data() {
    return {
		loginData:[
			{
				title:"手机验证码登录",
				pl1:"手机号",
				pl2:"请输入验证码",
				btn:"获取验证码",
				txt:"账号密码登录",
				tel:"+86"
			},
			{
				title:"账号密码登录",
				pl1:"昵称/手机号/邮箱",
				pl2:"请输入密码",
				btn:"忘记密码?",
				txt:"验证码登录"
			}
		]
	};
  },
  methods: {
    goBack() {
      uni.navigateBack({
        delta: 1,
      });
	}
  },
};
</script>

<style lang="scss">
.content {
  padding: 15rpx 20rpx;
}
</style>
