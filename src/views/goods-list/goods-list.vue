<template>
  <div class="goods-list">
    <navbar :title="title">
      <div class="search extends-click" slot="right">
        <img class="icon-search" src="../../common/image/mall/icon-search.png" alt="">
      </div>
    </navbar>
    <div class="content">
      <div class="sort-wrap">
        <ul class="sort-list">
          <li class="sort-item"
            :class="sortWay === 1 ? 'active': ''"
            @click="changeSortWay(1)">
            <span class="sort-way">热门</span>
          </li>
          <li class="sort-item"
            :class="sortWay === 2 ? 'active': ''"
            @click="changeSortWay(2)">
            <span class="sort-way">销量</span>
          </li>
           <li class="sort-item"
            :class="sortWay === 3 ? 'active': ''"
            @click="changeSortWay(3)">
            <span class="sort-way">新品</span>
          </li>
           <li class="sort-item"
            :class="sortWay === 4 ? 'active': ''"
            @click="changeSortWay(4)">
            <span class="sort-way">价格</span>
            <img class="icon" :src="priceSortIcon" alt="">
          </li>
        </ul>
      </div>
      <div class="goods-wrap">
        <cube-scroll>
          <ul class="list">
            <goods-item
              class="godos-item"
              v-for="item in 9"
              :key="item"
              @click="() => this.$router.push('/goods-detail')" />
          </ul>
        </cube-scroll>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from '../../components/navbar/navbar'
import GoodsItem from '../../components/goods-item-horiz/goods-item-horiz'

export default {
  name: 'goods-list',
  data() {
    return {
      title: '',
      sortWay: 1,
      priceSort: ''
    }
  },
  computed: {
    priceSortIcon() {
      const priceSortIcon = this.sortWay === 4
        ? this.priceSort === 'asc'
          ? require('../../common/image/mall/price-asc.png')
          : require('../../common/image/mall/price-desc.png')
        : require('../../common/image/mall/price-default.png')
      return priceSortIcon
    }
  },
  beforeRouteEnter (to, from, next) {
    // ...
    const title = to.query.title
    next(vm => {
      vm.title = title
    })
  },
  methods: {
    changeSortWay(sortWay) {
      if (sortWay === 4 && this.sortWay === sortWay) {
        this.priceSort = this.priceSort === 'asc' ? 'desc' : 'asc'
      } else {
        this.priceSort = 'asc'
      }
      this.sortWay = sortWay
    }
  },
  components: {
    Navbar,
    GoodsItem
  }
}
</script>

<style lang="scss" scoped>
.goods-list {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: #fff;
  z-index: 1;
  .search {
    display: flex;
    .icon-search {
      width: 15px;
      height: 15px;
    }
  }
  .content {
    position: absolute;
    top: 44px;
    right: 0;
    bottom: 0;
    left: 0;
    .sort-wrap {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 40px;
      padding: 0 8px;
      box-shadow: 0 2px 5px 0 rgba(127, 127, 127, .15);
      z-index: 1;
      .sort-list {
        display: flex;
        flex-direction: row;
        .sort-item {
          position: relative;
          flex: 1;
          height: 40px;
          display: flex;
          justify-content: center;
          align-items: center;
          // &::after {
          //   display: block;
          //   content: '';
          //   position: absolute;
          //   top: 8px;
          //   right: 0;
          //   width: 1px;
          //   height: 25px;
          //   transform: scaleX(.5);
          //   background-color: #ebebeb;
          // }
          // &:last-child::after {
          //   display: none;
          // }
          .sort-way {
            font-size: 12px;
            color: #666;
          }
          &.active {
            .sort-way {
              color: #F64952;
              font-weight: 500;
            }
          }
          .icon {
            margin-left: 4px;
            width: 9px;
            height: 12px;
          }
        }
      }
    }
    .goods-wrap {
      position: absolute;
      top: 40px;
      right: 0;
      bottom: 0;
      left: 0;
      z-index: 0;
      .list {
        display: flex;
        flex-wrap: wrap;
        padding: 15px 15px 0;
        justify-content: space-between;
        .goods-item {
          margin-bottom: 10px;
        }
      }
    }
  }
}
</style>
