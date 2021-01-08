<template>
  <div>
    <form action="/">
      <van-search
        v-model="value"
        show-action
        placeholder="请输入搜索关键词"
        @search="onSearch"
        @cancel="onCancel"
        @focus="toSearch"
      />
    </form>

    <van-swipe height="150" :autoplay="3000">
      <van-swipe-item v-for="(image, index) in images" :key="index">
        <van-image lazy-load :src="image" />
      </van-swipe-item>
    </van-swipe>

    <van-grid :border="false" :column-num="6">
      <van-grid-item
        :text="item.text"
        v-for="(item, index) in categoryList"
        :key="index"
      >
        <van-icon
          size="1.4rem"
          :name="item.image"
          :color="item.color ? item.color : '#1989fa'"
        />
        <span style="font-size: 11px">{{ item.text }}</span>
      </van-grid-item>
    </van-grid>

    <van-image
      fit="fill"
      width="100%"
      height="100"
      src="https://m.360buyimg.com/babel/jfs/t1/163645/22/890/444819/5ff2eb90E8f180875/b6aa269c14d92cc2.jpg"
    />

    <van-grid :border="false" :column-num="2">
      <van-grid-item class="gridItem">
        <div>便宜好货</div>
        <van-image src="https://img.yzcdn.cn/vant/apple-1.jpg" />
      </van-grid-item>
      <van-grid-item>
        <van-image src="https://img.yzcdn.cn/vant/apple-2.jpg" />
      </van-grid-item>
      <van-grid-item>
        <van-image src="https://img.yzcdn.cn/vant/apple-3.jpg" />
      </van-grid-item>
    </van-grid>

    
    <tabbar></tabbar>
  </div>
</template>

<script>
import { Toast } from "vant";
import tabbar from '../component/Tabbar'
export default {
  components: {
    tabbar,
  },
  data() {
    return {
      value: "",
      images: [
        "https://img.yzcdn.cn/vant/apple-1.jpg",
        "https://img.yzcdn.cn/vant/apple-2.jpg",
        "https://img.yzcdn.cn/vant/apple-3.jpg",
        "https://img.yzcdn.cn/vant/apple-4.jpg",
      ],
      categoryList: [
        {
          image: "fire-o",
          text: "爆品",
          color: "red",
        },
        {
          image: "gift",
          text: "白条",
        },
        {
          image: "like",
          text: "喜欢",
        },
        {
          image: "comment",
          text: "理财",
          color: "green",
        },
        {
          image: "gem",
          text: "理财",
        },
        {
          image: "service",
          text: "服务",
        },
        {
          image: "gold-coin",
          text: "金币",
          color: "yellow",
        },
        {
          image: "chat",
          text: "聊天",
          color: "blue",
        },
        {
          image: "more",
          text: "更多",
          color: "blue",
        },
      ],
    };
  },
  methods: {
    onSearch(val) {
      Toast(val);
    },
    onCancel() {},
    toSearch(e) {
      //跳转到搜索页面
      console.log(e);
    },
  },
};
</script>

<style lang="scss" scoped>
.van-swipe .van-swipe-item {
  img {
    width: 100%;
    height: 100%;
  }
}
 
</style>