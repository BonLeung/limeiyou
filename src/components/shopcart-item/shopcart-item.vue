<template>
  <div class="shopcart-item">
    <radio class="select-box" />
    <img src="../../common/image/test/goods-img.png" alt="" class="thumbnail">
    <div class="detail">
      <div class="name">产品名称产品名称产品名称产品名称产品名称产品名称</div>
      <div class="attrs">
        <div class="attr">
          <span class="text">m</span>
          <img class="icon-down" src="../../common/image/mall/icon-down.png" alt="">
        </div>
      </div>
      <div class="info">
        <div class="price">
          <span class="unit">￥</span>
          <span class="num">848</span>
        </div>
        <div class="integral">利美积分（888）个</div>
      </div>
      <div class="num-box">
        <div class="minus">-</div>
        <div class="num">1</div>
        <div class="plus">+</div>
      </div>
    </div>
  </div>
</template>

<script>
import Radio from '../../components/radio/radio'

export default {
  name: 'shopcart-item',
  components: {
    Radio
  }
}
</script>

<style lang="scss" scoped>
.shopcart-item {
  display: flex;
  align-items: center;
  padding: 16px 15px;
  background-color: #fff;
  margin-bottom: 10px;
  &:last-child {
    margin-bottom: 0;
  }
  .select-box {
    // margin-left:
  }
  .thumbnail {
    margin-left: 10px;
    width: 82px;
    height: 82px;
    border-radius: 5px;
  }
  .detail {
    position: relative;
    margin-left: 12px;
    flex: 1;
    height: 82px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .name {
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
      overflow: hidden;
      text-overflow: ellipsis;
      height: 28px;
      line-height: 15px;
      font-size: 13px;
      color: #222;
    }
    .info {
      display: flex;
      align-items: center;
      .price {
        display: flex;
        align-items: flex-end;
        .unit {
          font-size: 10px;
          color: #F64952;
        }
        .num {
          font-size: 14px;
          color: #F64952;
        }
      }
      .integral {
        margin-left: 8px;
        line-height: 14px;
        font-size: 10px;
        color: #999;
      }
    }
    .attrs {
      display: flex;
      align-items: center;
      .attr {
        height: 18px;
        display: flex;
        align-items: center;
        border: 1px solid #D9D9D9;
        padding: 0 5px;
        border-radius: 2px;
        box-sizing: border-box;
        .text {
          font-size: 10px;
          color: #aaa;
        }
        .icon-down {
          margin-left: 5px;
          width: 5px;
          height: 2px;
        }
      }
    }
    .num-box {
      position: absolute;
      right: 0;
      bottom: 0px;
      display: flex;
      height: 18px;
      align-items: center;
      border: 1px solid #E5E5E5;
      border-radius: 2px;
      box-sizing: border-box;
      .minus,
      .plus {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 18px;
        height: 18px;
        font-size: 12px;
        color: #E5E5E5;
      }
      .num {
        height: 18px;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 0 12px;
        border-left: 1px solid #E5E5E5;
        border-right: 1px solid #E5E5E5;
        font-size: 12px;
        color: #666;
      }
    }
  }
}
</style>
