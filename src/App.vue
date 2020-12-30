

<template>
  <div>
    <van-nav-bar
      :title="nav_bar_title"
      :left-arrow="left_arrow"
      @click-left="onClickLeft"
    />
    <router-view />
  </div>
</template>

<script>
export default {
  data() {
    return {
       
      left_arrow: true,
    };
  },
  computed: {
    nav_bar_title() {
      return this.$store.state.nav.nav_bar_title
    }
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
  },
};
</script>

<style   scoped>
.van-nav-bar{
  background-color: lightblue;
}
</style>