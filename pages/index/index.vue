<template>
	<view class="content">
		<view :style="{ height: `${$statusBarHeight}px` }" style="background-color: #fff"></view>
		<!-- 搜索组件 -->
		<my-search :title="title"/>
		<!-- 选项 -->
		<my-tabs :tabs="tabs"/>
	</view>
</template>

<script>
import API from "../../api";
import mySearch from "../../components/search/search.vue";
import myTabs from "../../components/tabs";
	export default {
		components:{
			mySearch,
			myTabs
		},
		data() {
			return {
				title: '搜索糗事',
				tabs:[],
				defaultIndex:0,
			}
		},
		onShow(){
			this.getInit();
		},
		methods: {
			async getInit(){
				const result = await API.getNavData();
				this.tabs = result.data.data.list;
			}
		},
	}
</script>

<style lang="scss">

</style>
