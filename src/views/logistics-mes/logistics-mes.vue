<template>
  <div>
    <div class="top">
      <img src="../../common/image/public/icon-back.png" alt=""  @click="$router.go(-1)">
      <span class="goodsname">物流信息</span>
    </div>
    <div>

    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
    }
  },
  mounted() {
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>
  .top{
    width: 100%;
    height: 49px;
    background:rgba(255,255,255,1);
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    justify-content: space-between;
    align-items: center;
    border-bottom: 0.5px solid #EDEDED;
    img{
      width: 6.5px;
      height: 13px;
      position: relative;
      left: 15px;
    }
    .goodsname{
      font-size: 16px;
      font-family:PingFang-SC-Medium;
      font-weight: 500;
      color: #333333;
      margin-right: 156px;
    }
  }
</style>
