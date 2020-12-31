<template>
  <!-- 搜索组件 -->
  <view class="search">
    <view>
	  <my-icon iconSize="45" iconName="icon-qiandao" iconColor="#FF9933"></my-icon>
    </view>
    <view class="search_item">
	  <text class=''>
	  <my-icon iconSize="30" iconName="icon-sousuo" iconColor="#cacaca"></my-icon>
	  </text>
      <text>{{title}}</text>
    </view>
    <view>
	  <my-icon iconSize="45" iconName="icon-bianji1" ></my-icon>
    </view>
  </view>
</template>

<script>
export default {
	props:["title"],
};
</script>

<style lang="scss">
.search{
	width: 100%;
	height: 118rpx;
	display: flex;
	justify-content: space-between;
	padding: 0 10rpx;
	box-sizing: border-box;
	align-items: center;
	view{
		flex: 1;
		text-align: center;
		line-height: 118rpx;
	}
	.search_item{
		flex:7;
		display: flex;
		height: 65%;
		justify-content: center;
		background-color: #f7f7f7;
		border-radius: 10rpx;
		align-items: center;
		text{
			margin: 0 7rpx;
			color: #cacaca;
		}
	}
}
</style>
