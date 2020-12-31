<template>
  <view>
    <scroll-view scroll-x class="uni-swiper-tab">
      <block v-for="(tab, index) in tabs" :key="tab.id">
        <view
          class="swiper-tab-list"
          :class="{ active: tabIndex == index }"
          @tap="tabtap(index)">
          {{ tab.classname }}
        </view>
      </block>
    </scroll-view>
    <view class="uni-tab-bar">
      <swiper
        class="swiper-box"
        :style="{ height: swiperheight + 'px' }"
        :current="tabIndex"
        @change="tabChange">
        <swiper-item v-for="(items, index) in newslist" :key="index">
          <scroll-view scroll-y class="uni_tabbar_list list">
            <swiper-item-abs :newList="newslist" />
          </scroll-view>
        </swiper-item>
      </swiper>
    </view>
  </view>
</template>
<script>
// 列表单个组件
import swiperItemAbs from "../../components/swiper-item/index";
import API from "../../api";
export default {
  props:{
    tabs:{
      type:Array,
      defalut:()=>[]
    }
  },
  components: {
    swiperItemAbs,
  },
  data() {
    return {
      swiperheight: 500,
      tabIndex: 0,
      page:1,
      newslist:[],
    };
  },
  created() {
    this.getcontent();
  },
  methods: {
    // tabbar点击事件
    tabtap(index) {
      this.tabIndex = index;
    },
    // 滑动事件
    tabChange(e) {
      this.tabIndex = e.detail.current;
      this.getcontent();
    },
    async getcontent(){
				const result = await API.getContentData({index:this.tabIndex+1,id:1});
        this.newslist = result.data.data.list;
		}
  },
};
</script>

<style lang="scss">
.uni-scroll-view-content {
  width: 750rpx;
}
.uni-swiper-tab {
  border-bottom: 1rpx solid #eeeeee;
}

.uni-swiper-tab > block > view {
  display: inline;
}
.swiper-tab-list {
  color: #969696;
  font-weight: bold;
  flex: 1;
  line-height: 80rpx;
  padding-bottom: 5rpx;
}
.active {
  color: $themeColor;
  font-size: 35rpx;
  transition: 0.5s;
}

/*文章组件样式 */
.uni_tabbar_list {
  width: 100%;
}
</style>
