<template>
  <div>
    <van-nav-bar left-arrow style="height: 52px">
      <template #title>
        <van-search v-model="itemSearch" placeholder="搜索" />
      </template>
      <template #right>
        <van-icon name="share-o" />
      </template>
    </van-nav-bar>

    <my-swiper :list="swipers"></my-swiper>

    <span style="color: #dd1a21; font-size: 1rem">￥</span>
    <span style="color: #dd1a21; font-size: 1.6rem">{{ itemInfo.price }}</span>

    <div class="taglist">
      <van-tag
        plain
        type="danger"
        v-for="(tab, index) in taglist"
        :key="index"
        style="margin-right: 5px"
        >{{ tab }}</van-tag
      >
    </div>

    <div class="baseInfo">
      <div class="info">
        <div class="name">{{ itemInfo.itemName }}</div>
        <div class="desc">推荐理由</div>
      </div>
      <div class="comment single-line">
        <div class="wrap">
          <div class="info-wrap">
            <div class="num" style="color: #dd1a21">99.6%</div>
            <div class="com">好评率</div>
          </div>
          <van-icon name="arrow" size="1rem" />
        </div>
      </div>
    </div>

    <div class="rcmdBanner">
      <div class="angleTop"><span class="angleContent"></span></div>
      <ul>
        <li>
          <div class="recommendReason">
            【双摄系统】支持夜间模式，超广角／广角摄像头
          </div>
        </li>
        <li>
          <div class="recommendReason">
            【超快5G】支持众多5G频段，网络覆盖遍及全球
          </div>
        </li>
        <li>
          <div class="recommendReason">
            【A14芯片】iPhone速度更快，电池续航更强
          </div>
        </li>
        <li>
          <div class="recommendReason">
            【设计和显示屏】惊人的对比度和分辨率，四倍抗跌力
          </div>
        </li>
      </ul>
    </div>

    <p />

    <van-cell title="邮费：免邮，合作仓直发" is-link />
    <van-cell title="购物返：最高返629积分" is-link />
    <van-cell title="请选择规格数量" @click="selectSku" is-link />

    <div class="lazy-component-wrapper" style=" width=100%">
      <van-image
        lazy-load
        fit="contain"
        src="https://yanxuan-item.nosdn.127.net/86136c3712ed5ba2462d5be50fc17d70.jpg?quality=75&amp;type=webp&amp;imageView"
      />
      <van-image
        lazy-load
        fit="contain"
        src="https://yanxuan-item.nosdn.127.net/9458cf7449162e71269e220870d1d552.jpg?quality=75&amp;type=webp&amp;imageView"
      />
      <van-image
        lazy-load
        fit="contain"
        src="https://yanxuan-item.nosdn.127.net/95a0fed8dfb85d20e76b3de229796b64.jpg?quality=75&amp;type=webp&amp;imageView"
      />
    </div>

    <div style="height: 50px"></div>
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

    <van-sku
      v-model="showsku"
      :sku="sku"
      :goods="goods"
      :goods-id="goodsId"
      :quota="quota"
      :quota-used="quotaUsed"
      :hide-stock="sku.hide_stock"
      :message-config="messageConfig"
      @buy-clicked="onBuyClicked"
      @add-cart="onAddCartClicked"
    />
  </div>
</template>

<script>
import { Toast } from "vant";
import MySwiper from "../../component/Swiper";
export default {
  components: {
    MySwiper,
  },
  data() {
    return {
      itemSearch: "",
      swipers: [
        {
          carouselUrl: require("../../assets/item/1.jpg?type=webp&imageView&quality=75&thumbnail=750x0"),
          redirectUrl: "",
        },
        {
          carouselUrl: require("../../assets/item/2.jpg?type=webp&imageView&quality=75&thumbnail=750x0"),
          redirectUrl: "",
        },
        {
          carouselUrl: require("../../assets/item/3.jpg?type=webp&imageView&quality=75&thumbnail=750x0"),
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
      taglist: ["新品>", "爆品>"],
      itemInfo: {
        price: 10234.0,
        itemName: "【大牌补贴】Apple iPhone 12",
      },
      showsku: false,
      sku: {
        // 所有sku规格类目与其值的从属关系，比如商品有颜色和尺码两大类规格，颜色下面又有红色和蓝色两个规格值。
        // 可以理解为一个商品可以有多个规格类目，一个规格类目下可以有多个规格值。
        tree: [
          {
            k: "颜色", // skuKeyName：规格类目名称
            k_s: "s1", // skuKeyStr：sku 组合列表（下方 list）中当前类目对应的 key 值，value 值会是从属于当前类目的一个规格值 id
            v: [
              {
                id: "sku1", // skuValueId：规格值 id
                name: "红色", // skuValueName：规格值名称
                imgUrl: "https://img.yzcdn.cn/2.jpg", // 规格类目图片，只有第一个规格类目可以定义图片
                previewImgUrl: "https://img.yzcdn.cn/2p.jpg", // 用于预览显示的规格类目图片
              },
              {
                id: "sku2",
                name: "蓝色",
                imgUrl: "https://img.yzcdn.cn/2.jpg",
                previewImgUrl: "https://img.yzcdn.cn/2p.jpg",
              },
            ],
            largeImageMode: true, //  是否展示大图模式
          },
        ],
        // 所有 sku 的组合列表，比如红色、M 码为一个 sku 组合，红色、S 码为另一个组合
        list: [
          {
            id: 2259, // skuId
            s1: "sku1", // 规格类目 k_s 为 s1 的对应规格值 id
            price: 100, // 价格（单位分）
            stock_num: 110, // 当前 sku 组合对应的库存
          },{
            id: 2260, // skuId
            s1: "sku2", // 规格类目 k_s 为 s1 的对应规格值 id
            price: 100, // 价格（单位分）
            stock_num: 120, // 当前 sku 组合对应的库存
          },
           
        ],
        price: "1.00", // 默认价格（单位元）
        stock_num: 227, // 商品总库存
        collection_id: 2261, // 无规格商品 skuId 取 collection_id，否则取所选 sku 组合对应的 id
        none_sku: false, // 是否无规格商品
        messages: [
          {
            // 商品留言
            datetime: "0", // 留言类型为 time 时，是否含日期。'1' 表示包含
            multiple: "0", // 留言类型为 text 时，是否多行文本。'1' 表示多行
            name: "留言", // 留言名称
            type: "text", // 留言类型，可选: id_no（身份证）, text, tel, date, time, email
            required: "1", // 是否必填 '1' 表示必填
            placeholder: "", // 可选值，占位文本
          },
        ],
        hide_stock: false, // 是否隐藏剩余库存
      },
      goods: {
        // 默认商品 sku 缩略图
        picture: "https://img.yzcdn.cn/2.jpg",
      },
      messageConfig: {
        // 图片上传回调，需要返回一个promise，promise正确执行的结果需要是一个图片url
        uploadImg: () => {
          return new Promise((resolve) => {
            setTimeout(
              () =>
                resolve(
                  "https://img.yzcdn.cn/upload_files/2017/02/21/FjKTOxjVgnUuPmHJRdunvYky9OHP.jpg!100x100.jpg"
                ),
              1000
            );
          });
        },
        // 最大上传体积 (MB)
        uploadMaxSize: 3,
        // placeholder 配置
        placeholderMap: {
          text: "xxx",
          tel: "xxx",
        },
        // 初始留言信息
        // 键：留言 name
        // 值：留言内容
        initialMessages: {
          留言: "留言信息",
        },
      },
      goodsId:2,
      quota:3,
      quotaUsed:4
    };
  },
  methods: {
    onClickIcon() {
      Toast("点击图标");
    },
    onClickButton() {
      Toast("点击按钮");
    },
    selectSku() {
      //Toast("selectSku");
      this.showsku = true;
    },
    onBuyClicked() {},
    onAddCartClicked() {},
  },
  created() {
    let mm = this.$route.params; //parms包含传递的所有参数;
    console.log(mm.id);
  },
};
</script>

<style lang="scss" scoped>
.baseInfo {
  display: flex;
  margin: 0.18rem 0.18rem;
  .info {
    flex: 1;
    .name {
      font-size: 0.8rem;
      color: #333;
      font-weight: 700;
      line-height: 0.64rem;
      margin-bottom: 0.53rem;
      margin-top: 0.53rem;
    }
    .desc {
      font-size: 0.4rem;
      color: #333;
      font-weight: lighter;
    }
  }
  .comment {
    display: flex;
    justify-content: center;
    .wrap {
      display: flex;
      align-items: center;
    }
    .van-icon {
      flex: 1;
    }
  }
}
.rcmdBanner {
  border-radius: 2px;
  margin: 0.2rem 0.2rem 0;
  background: #fafafa;
  border: 1px solid #e6e6e6;
  position: relative;
  li {
    color: #333;
    font-family: PingFangSC-Regular;
    font-size: 0.32rem;
    .recommendReason {
      display: inline-block;
      vertical-align: middle;
      margin-top: 0.25rem;
    }
  }
}
.taglist {
  margin: auto 0.18rem;
}
.m-points {
  padding-left: 0.5rem;
  color: #333;
  font-size: 0.75rem;
  line-height: 2.6rem;
  align-items: center;
  border-bottom: 1px solid #d9d9d9;
}
</style>