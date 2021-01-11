<template>
  <div style="height: 100%">
    <van-search v-model="searchVal" placeholder="请输入搜索关键词" />
    <div class="m-cateContainer">
      <div class="m-left">
        <div style="transform: translateY(0px);">
        <van-sidebar v-model="activeKey">
          <van-sidebar-item title="标签名称" to="/itemlist/cate1" />
          <van-sidebar-item title="标签名称" />
          <van-sidebar-item title="标签名称" />
        </van-sidebar>
        </div>
      </div>
      <div class="m-right">
        <div style="transform: translateY(0px)">
          <div>
          <router-view />
          </div>
        </div>
      </div>
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
      activeKey: 1,
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
.m-cateContainer {
  overflow: auto;
  height: 86%;
  width: 100%;
  .m-left {
    float: left;
    width: 21%;
    height: 100%;
    overflow: auto;
    //background-color: yellow;
  }
  .m-right {
    float: left;
    width: 79%;
    padding: 0.4rem 0.32rem 0.28rem;
    height: 100%;
    overflow: auto;
  }
}
</style>