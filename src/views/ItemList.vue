<template>
  <div>
    <form action="/">
      <van-search
        v-model="value"
        show-action
        placeholder="请输入搜索关键词"
        @search="onSearch"
        @cancel="onCancel"
      />
    </form>
  </div>
</template>

<script>

export default {
  data() {
    return {
      value: "",
    };
  },
  methods: {
    onSearch(val) {
      //Toast(val);
      //世子很凶
      //长夜行
      //我有一个剑仙娘子
      //花与剑与法兰西
       this.$toast(val)

    },
    onCancel() {
      //Toast('取消');
    },
  },
  mounted() {
    this.$store.commit("setBartitle", "商品列表");
  },
};
</script>

<style lang="scss" scoped>
</style>