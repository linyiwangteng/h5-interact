<!--
 * @Author: wangteng
 * @Date: 2020-04-16 20:01:07
 * @LastEditTime: 2020-04-16 20:50:09
 * @LastEditors: wangteng
 * @FilePath: /coureseware/src/views/interactive/pages/index/index.vue
 -->
<template>
  <div>
    <span>类型:</span>
    <input
      type="text"
      class="add-type"
      placeholder="输入类型"
      v-model="iconType"
    />
    <button @click="handleNewType" class="add-colums">增加一栏</button>

    <div v-for="(item, index) in allType" :key="index" class="colums">
      <h4>{{ item.type }}</h4>
      <span>单价:</span>
      <input type="text" v-model="item.price" />
      <span>数量:</span>
      <input type="text" v-model="item.num" />
      <span class="allPrice">单项总价:{{ item.price * item.num }}</span>
    </div>
    <div class="all-price">
      <input type="text" v-model="rmb" class="rmb" />
      <span @click="handleAllPrice" class="jisuan-price">计算总价</span>
      <span>总价: {{ allPrice }}</span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      test: process.env.VUE_APP_CESHI,
      iconType: "",
      allType: [
        { type: "xrp", price: "0.8", num: "199.60" },
        { type: "xrp", price: "0.52", num: "2261.14" },
        { type: "bsv", price: "430", num: "1.5968" },
        { type: "bsv", price: "420", num: "0.9980" },
        { type: "bsv", price: "402", num: "0.5988" },
        { type: "bsv", price: "420", num: "0.4990" },
        { type: "eth", price: "360", num: "0.5" },
        { type: "eth", price: "520", num: "0.499" },
        { type: "eth", price: "360", num: "1.2564" },
        { type: "eos", price: "5.2", num: "37.9240" },
        { type: "eos", price: "8.4", num: "23.4530" },
        { type: "eos", price: "5.2", num: "24.95" }
      ],
      allPrice: 0,
      rmb: 7.1
    };
  },
  methods: {
    handleNewType() {
      if (!this.iconType) {
        alert("input icon type");
      }
      this.allType.push({
        type: this.iconType,
        price: "",
        num: ""
      });
    },
    handleAllPrice() {
      let allPrice = 0;
      this.allType.map(item => {
        allPrice += item.price * item.num;
      });
      this.allPrice = allPrice * this.rmb;
    }
  }
};
</script>

<style lang="scss" scoped>
.add-type {
  font-size: 14px;
  margin-left: 20px;
  line-height: 30px;
}
.add-colums {
  display: inline-block;
  width: 80px;
  height: 30px;
  line-height: 30px;
  background: green;
  color: #ffffff;
  border: none;
  border-radius: 8px;
  margin-left: 20px;
}
.colums {
  display: flex;
  justify-content: center;
  padding: 20px 0 0px;
  h4 {
    margin-right: 20px;
  }
  span {
    margin-right: 10px;
  }
  input {
    display: block;
    width: 110px;
    margin-right: 20px;
  }
  .allPrice {
    display: block;
    width: 200px;
    text-align: left;
  }
}
.all-price {
  margin-top: 20px;
}
.jisuan-price {
  padding: 4px 10px;
  cursor: pointer;
  background: green;
  color: #ffffff;
  margin-right: 20px;
  font-size: 12px;
}
.rmb {
  margin-right: 10px;
  width: 40px;
  padding: 0 8px;
  font-size: 14px;
}
</style>
