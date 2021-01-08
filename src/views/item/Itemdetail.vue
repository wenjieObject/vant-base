<template>
  <div>
    <van-nav-bar left-arrow style="height:52px">
      <template #title>
        <van-search v-model="itemSearch" placeholder="搜索" />
      </template>
      <template #right>
        <van-icon name="share-o" />
      </template>
    </van-nav-bar>

    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item>1</van-swipe-item>
      <van-swipe-item>2</van-swipe-item>
      <van-swipe-item>3</van-swipe-item>
      <van-swipe-item>4</van-swipe-item>
    </van-swipe>

    <span style="color:red;font-size:1.0rem">￥</span>  <span style="color:red;font-size:1.6rem">234.0</span>
    

    <van-goods-action>
      <van-goods-action-icon icon="chat-o" text="客服" @click="onClickIcon" />
      <van-goods-action-icon icon="cart-o" text="购物车" @click="onClickIcon" />
      <van-goods-action-icon icon="shop-o" text="店铺" @click="onClickIcon" />
      <van-goods-action-button
        type="danger"
        text="立即购买"
        @click="onClickButton"
      />
    </van-goods-action>
  </div>
</template>

<script>
import { Toast } from "vant";

export default {
  data() {
    return {
      itemSearch: "",
    };
  },
  methods: {
    onClickIcon() {
      Toast("点击图标");
    },
    onClickButton() {
      Toast("点击按钮");
    },
  },
  created() {
    let mm = this.$route.params; //parms包含传递的所有参数;
    console.log(mm.id);
  },
};
</script>

<style lang="scss" scoped>

  .my-swipe .van-swipe-item {
    color: #fff;
    font-size: 20px;
    line-height: 250px;
    text-align: center;
    background-color: #39a9ed;
  }
</style>