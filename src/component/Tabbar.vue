<template>
  <van-tabbar
    route
    v-model="active"
    @change="onChange"
  >
    <van-tabbar-item to="/" icon="home-o">主页</van-tabbar-item>
    <van-tabbar-item to="/itemlist" icon="search">分类</van-tabbar-item>
    <van-tabbar-item icon="friends-o">购物车</van-tabbar-item>
    <van-tabbar-item icon="setting-o">我的</van-tabbar-item>
  </van-tabbar>
</template>

<script>
export default {
  data() {
    return {
      active: 0,
    };
  },
  methods: {
    onChange(val) {
      //this.active = val;
      console.log(val);
    },
  },
};
</script>

<style lang="scss" scoped>
</style>