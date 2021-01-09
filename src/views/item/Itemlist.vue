<template>
  <div style="height: 100%">
    <van-search v-model="searchVal" placeholder="请输入搜索关键词" />

    <div class="contain">
      <div class="sidebar">
        <van-sidebar v-model="activeKey" @change="onChange">
          <van-sidebar-item title="标签名1" />
          <van-sidebar-item title="标签名2" to="/itemlist/cate1" />
          <van-sidebar-item title="标签名3" />
        </van-sidebar>
      </div>
      <van-image height="100" src="https://img.yzcdn.cn/vant/cat.jpeg" />
    </div>

    <tabbar></tabbar>
  </div>
</template>

<script>
import tabbar from "../../component/Tabbar";

export default {
  components: {
    tabbar,
  },
  data() {
    return {
      searchVal: "",
      activeKey: 0,
      swipers: [
        {
          carouselUrl: require("../../assets/item/1.jpg"),
          redirectUrl: "",
        },
        {
          carouselUrl: require("../../assets/item/2.jpg"),
          redirectUrl: "",
        },
        {
          carouselUrl: require("../../assets/item/3.jpg"),
          redirectUrl: "",
        },
        {
          carouselUrl: require("../../assets/item/4.jpg"),
          redirectUrl: "",
        },
        {
          carouselUrl: require("../../assets/item/5.jpg"),
          redirectUrl: "",
        },
      ],
    };
  },
  methods: {
    onChange() {},
  },
};
</script>

<style lang="scss" scoped>

.contain {
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: start;
  .sidebar{
      height: 100%;
      width: 4.3rem;
  }
}
</style>