<template>
  <view>
    <view class="header">{{dataList.title}}</view>
    <view class="form">
      <view class="seach_one">
        <text>{{dataList.tel}}</text><input v-model="isPhone.tel" :placeholder="dataList.pl1" />
      </view>
      <view class="seach_two">
        <input v-model="isPhone.code" :placeholder="dataList.pl2" />
      </view>
    </view>
    <!-- 登录按钮 -->
    <button class="active" @click="show" >验证码</button>
    <button class="active" @click="login" >登录</button>
    <view class="desc_container">
      <!-- 验证÷ -->
      <view class="lo_container">
        <view style="color: #0066cc" @click="toggle">{{dataList.txt}}</view>
        <view class="line"></view>
        <view style="color: #0066cc">登录遇到问题</view>
      </view>
      <!-- title -->
      <view class="title_content">---社区帐号登录---</view>
      <!-- 阅读同意 -->
      <view class="isreading">
        <text class="">注册即代表同意</text>
        <text style="color: #0066cc">《xxx社区协议》</text>
      </view>
    </view>
  </view>
</template>

<script>
import API from "../../api";
export default {
    props:{
        loginData:{
            type:Array,
            defalut:()=>[]
        }
    },
    data(){
       return{
           flag:false,
           dataList:this.loginData[1],
           isPhone:{
               tel:"",
               code:""
           }
       } 
    },
    methods:{
        toggle(){
            this.flag = !this.flag;
            if(this.flag){
                this.dataList = this.loginData[0]
            }else{
                this.dataList = this.loginData[1]
            }
        },
        async show(){
            const result = await API.getCodeData(this.isPhone.tel);
            uni.showToast({
              title:result.data.msg
            })
        },
        async login(){
          const result = await API.loginIsPhone({phone:this.isPhone.tel,code:this.isPhone.code})
          console.log(result)
          if(result.status === 200){
			uni.setStorageSync("token",result.data.data.token)
			uni.setStorageSync("user",result.data.data)
            uni.switchTab({
              url:"../../pages/home/home"
            })
          }
        }
    }
};
</script>

<style lang="scss">
.header {
  padding: 150rpx 0 80rpx 0;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 55rpx;
  font-weight: 400;
}
.form {
  width: 100%;
  height: 200rpx;
  display: flex;
  flex-direction: column;
  .seach_one{
      display: inline-flex;
      justify-content: flex-start;
      align-items: center;
  }
  view {
    flex: 1;
    border-bottom: 1px solid #eee;
    input {
      text-indent: 50rpx;
      height: 80%;
    }
  }
}
button {
  margin: 40rpx 0;
  color: #fff;
  border-radius: 40rpx;
  background: #f68098;
  display: flex;
  flex-direction: column;
}
.active {
    background: #fd4d6d;
}
.lo_container {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  .line {
    margin: 0 20rpx;
    width: 3rpx;
    height: 30rpx;
    background-color: #999;
  }
}
.title_content {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 50rpx 0;
}
.isreading {
  width: 100%;
  display: flex;
  justify-content: center;
}
</style>