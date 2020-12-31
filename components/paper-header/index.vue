<template>
  <view class="header">
			<view @click="openLeft">
				<my-icon :iconName="dataList.iconName" :iconSize="dataList.iconSize"></my-icon>
			</view>
			<view>{{dataList.title}}</view>
			<view @click="openRight">
				<my-icon :iconName="dataList.iconName2" :iconSize="dataList.iconSize"></my-icon>
			</view>
		</view>
</template>

<script>
export default {
    props:{
        dataList:Object,
        defalut:()=>[]
	},
	methods:{
		openLeft(){
			this.$emit("openLeft")
		},
		openRight(){
			this.$emit("openRight")
		}
	}
}
</script>

<style lang="scss">
.header{
		display: flex;
		justify-content: space-between;
		align-items: center;
		view{
			font-weight: bold;
			font-size: 32rpx;
		}
}
</style>