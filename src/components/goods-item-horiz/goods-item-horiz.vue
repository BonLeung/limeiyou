<template>
  <div class="goods-item" @click="() => this.$router.push('/goods-detail')">
    <div class="thumbnail-wrap">
      <img src="../../common/image/test/goods-img2.png" alt="" class="thumbnail">
    </div>
    <div class="content">
      <div class="name">这是服装名称这是服装名称这是服装名称</div>
      <div class="info">
        <div class="price-wrap">
          <span class="unit">￥</span>
          <span class="price">549</span>
        </div>
        <div class="integral">利美积分（50）个</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'goods-item'
}
</script>

<style lang="scss" scoped>
.goods-item {
  width: 168px;
  height: 238px;
  border: 1px solid #eee;
  border-radius: 3px;
  box-sizing: border-box;
  overflow: hidden;
  .thumbnail-wrap {
    position: relative;
    height: 168px;
    display: flex;
    justify-content: center;
    align-items: center;
    &::after {
      display: block;
      content: '';
      height: 1px;
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: #eee;
    }
    .thumbnail {
      width: 100%;
      height: 100%;
    }
  }
  .content {
    padding: 0 8px;
    height: 70px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .name {
      margin-top: 5px;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
      overflow: hidden;
      text-overflow: ellipsis;
      line-height: 15px;
      height: 30px;
      font-size: 13px;
      color: #333;
    }
    .info {
      margin-bottom: 9px;
      display: flex;
      align-items: flex-end;
      .price-wrap {
        display: flex;
        align-items: flex-end;
        .unit {
          font-size: 10px;
          color: #F64952;
        }
        .price {
          font-size: 14px;
          color: #F64952;
        }
      }
      .integral {
        margin-left: 7px;
        font-size: 10px;
        color: #aaa;
      }
    }
  }
}
</style>
