<template>
	<view class="content"> 
		<!-- height -->
    	<view :style="{ height: `${$statusBarHeight}px` }" style="background-color: #fff"></view>
		<view class="header">
			<view @click="goBack">
				<my-icon iconName="icon-fanhui" iconSize="50"></my-icon>
			</view>
			<view>设置</view>
			<view></view>
		</view>	
		<view v-if="token">
			<user-row-item :rowData="userListLang"></user-row-item>
			<button type="warn" class="btn" @tap="goPut">退出登录</button>
		</view>
		<view v-else>
			<user-row-item :rowData="userlist"></user-row-item>
		</view>
	</view>
</template>

<script>
import userRowItem from "../../components/user-row-item";
import API from "../../api";
	export default {
		components:{
			userRowItem
		},
		data() {
			return {
				userlist:[
					{
						name:"清除缓存"
					},
					{
						name:"关于社区"
					}
				],
				userListLang:[
					{
						name:"账号与安全"
					},
					{
						name:"资料编辑"
					},
					{
						name:"清除缓存",
						cache:"200KB"
					},
					{
						name:"意见反馈"
					},
					{
						name:"关于社区"
					}
				]
			}
		},
		computed:{
			token(){
				return uni.getStorageSync("token")
			},
		},
		methods: {
			goBack(){
				uni.navigateBack({
					delta:1
				})
			},
			// 退出登录
			async goPut(){
				const result = await API.putIsPhone(uni.getStorageSync("token"));
				console.log(result.status)
				if(result.status === 200){
					uni.showToast({
						title:"退出成功"
					});
					uni.removeStorageSync("token");
					uni.removeStorageSync("user")
					setTimeout(()=>{
						uni.switchTab({
							url:"../home/home"
						})
					},1000)
				}
			}
		}
	}
</script>

<style lang="scss">
.content{
	padding: 10rpx;
	box-sizing: border-box;
	.header{
		display: flex;
		align-items: center;
		justify-content: space-between;
		view{
			font-size: 35rpx;
			font-weight: bold;
		}
	}
	.btn{
		width: 90%;
		border-radius: 50rpx;
		color: #fff;
		background: #fd4d6d;
	}
}
</style>
