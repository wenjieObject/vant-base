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

    <van-swipe height="260" :autoplay="3000">
      <van-swipe-item v-for="(image, index) in images" :key="index">
        <img v-lazy="image" />
      </van-swipe-item>
    </van-swipe>

    <van-grid square :column-num="4">
      <van-grid-item>
        <van-image   width="3rem" round fit="cover"
  height="3rem" src="https://img.yzcdn.cn/vant/apple-1.jpg" />
        <span>文字</span>
      </van-grid-item>
      <van-grid-item>
        <van-image src="https://img.yzcdn.cn/vant/apple-2.jpg" />
        <span>文字</span>
      </van-grid-item>
      <van-grid-item>
        <van-image src="https://img.yzcdn.cn/vant/apple-3.jpg" />
        <span>文字</span>
      </van-grid-item>
    </van-grid>
  </div>
</template>

<script>
import { Toast } from "vant";

export default {
  data() {
    return {
      value: "",
      images: [
        "https://img.yzcdn.cn/vant/apple-1.jpg",
        "https://img.yzcdn.cn/vant/apple-2.jpg",
        "https://img.yzcdn.cn/vant/apple-3.jpg",
        "https://img.yzcdn.cn/vant/apple-4.jpg",
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
  mounted() {
    this.$store.commit("setBartitle", " ");
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