<template>
  <div class="goods-item" @click="() => this.$router.push('/goods-detail')">
    <img src="../../common/image/test/goods-img.png" alt="" class="thumbnail">
    <div class="content">
      <div>
        <div class="name">产品名称产品名称产品名称</div>
        <p class="intro">产品详细介绍</p>
      </div>
      <div class="info">
        <div class="sale-info">
          <div class="price-wrap">
            <span class="unit">￥</span>
            <span class="price">848</span>
          </div>
          <div class="sales">已售500</div>
        </div>
        <div class="integral">利美积分100个</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'goods-item',
  props: {
    goods: {
      type: Object
    }
  }
}
</script>

<style lang="scss" scoped>
.goods-item {
  height: 110px;
  display: flex;
  flex-direction: row;
  padding: 15px;
  box-sizing: border-box;
  background-color: #fff;
  .thumbnail {
    width: 82px;
    height: 82px;
  }
  .content {
    flex: 1;
    margin-left: 15px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .name {
      line-height: 20px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      font-weight: 500;
      font-size: 13px;
      color: #333;
    }
    .intro {
      margin-top: 5px;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
      overflow: hidden;
      text-overflow: ellipsis;
      height: 28px;
      line-height: 15px;
      font-weight: 400;
      font-size: 12px;
      color: #333;
    }
    .info {
      display: flex;
      justify-content: space-between;
      align-items: center;
      .sale-info {
        display: flex;
        flex-direction: row;
        align-items: center;
        .price-wrap {
          display: flex;
          align-items: flex-end;
          .unit {
            line-height: 14px;
            font-size: 10px;
            color: #333;
          }
          .price {
            line-height: 14px;
            font-size: 14px;
            color: #333;
          }
        }
        .sales {
          margin-left: 8px;
          font-size: 11px;
          color: #999;
        }
      }
      .integral {
        font-size: 10px;
        color: #333;
      }
    }
  }
}
</style>
