<template>
  <div>
    <van-collapse v-model="activeNames">
      <van-collapse-item title="设备管理" name="1">
        <van-grid clickable :gutter="5" :column-num="4">
          <van-grid-item v-for="value in 8" :key="value">
           <van-icon name="exchange" size="2rem" color="#1989fa"/>
            <span>文字</span>
          </van-grid-item>
        </van-grid>
      </van-collapse-item>
      <van-collapse-item title="仓储管理" name="2">内容</van-collapse-item>
      <van-collapse-item title="其他1" name="3">内容</van-collapse-item>
      <van-collapse-item title="其他2" name="4">内容</van-collapse-item>
      <van-collapse-item title="其他3" name="5">内容</van-collapse-item>
    </van-collapse>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeNames: ["1"],
      pages: [
        {
          url: "",
          text: "",
          icon: "exchange",
          node: "equip",
        },
        {
          url: "",
          text: "",
          icon: "",
          node: "equip",
        },
      ],
    };
  },
  computed: {
    equipPages() {
      return this.data 
    }
  },
  mounted() {
    this.$store.commit("setBartitle", "主页");
  },
};
</script>

<style scoped>
.van-cell {
  background-color: red !important;
}
</style>