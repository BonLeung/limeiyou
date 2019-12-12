<template>
  <div class="my-orders">
    <div class="header">
      <navbar title="我的订单" />
      <div class="tab-wrap">
        <div class="tab-item"
          v-for="(tab, index) in tabs"
          :key="tab.name"
          :class="{active: tabIndex === index}"
          @click="changeTab(index)"
        >
          <div class="name">{{tab.name}}</div>
        </div>
      </div>
    </div>
    <div class="content">
      <cube-scroll
        :data="orders"
      >
        <ul class="order-list">
          <template v-for="item in orders" class="order-item">
            <order-item :order="item" :key="item.id" />
          </template>
        </ul>
      </cube-scroll>
    </div>
  </div>
</template>

<script>
import Navbar from '../../components/navbar/navbar'
import OrderItem from '../../components/order-item/order-item'

const tabs = [{
  id: 1,
  name: '全部',
  status: ''
}, {
  id: 2,
  name: '待付款',
  status: 0
}, {
  id: 3,
  name: '待发货',
  status: 1
}, {
  id: 4,
  name: '待收货',
  status: 2
}, {
  id: 5,
  name: '待评价',
  status: 3
}]

const orders = [{
  id: 1,
  time: '2018-12-14',
  status: 0,
  goods: [
    {
      goodsName: '产品名称产品名称',
      goodsPrice: '899.00',
      attrs: [
        {
          name: '颜色',
          content: '黑色'
        },
        {
          name: '尺寸',
          content: 'M'
        }
      ],
      num: 1
    },
    {
      goodsName: '产品名称产品名称',
      goodsPrice: '899.00',
      attrs: [
        {
          name: '颜色',
          content: '黑色'
        }
      ],
      num: 1
    }
  ],
  totalNum: 1,
  amount: '899.00',
  integral: 198,
}, {
  id: 2,
  time: '2018-12-14',
  status: 1,
  goods: [
    {
      goodsName: '产品名称产品名称',
      goodsPrice: '899.00',
      attrs: [
        {
          name: '颜色',
          content: '黑色'
        },
        {
          name: '尺寸',
          content: 'M'
        }
      ],
      num: 1
    }
  ],
  totalNum: 1,
  amount: '899.00',
  integral: 198,
}, {
  id: 3,
  time: '2018-12-14',
  status: 2,
  goods: [
    {
      goodsName: '产品名称产品名称',
      goodsPrice: '899.00',
      attrs: [
        {
          name: '颜色',
          content: '黑色'
        },
        {
          name: '尺寸',
          content: 'M'
        }
      ],
      num: 1
    }
  ],
  totalNum: 1,
  amount: '899.00',
  integral: 198
}, {
  id: 4,
  time: '2018-12-14',
  status: 3,
  goods: [
    {
      goodsName: '产品名称产品名称',
      goodsPrice: '899.00',
      attrs: [
        {
          name: '颜色',
          content: '黑色'
        },
        {
          name: '尺寸',
          content: 'M'
        }
      ],
      num: 1
    }
  ],
  totalNum: 1,
  amount: '899.00',
  integral: 198
}, {
  id: 5,
  time: '2018-12-14',
  status: 4,
  goods: [
    {
      goodsName: '产品名称产品名称',
      goodsPrice: '899.00',
      attrs: [
        {
          name: '颜色',
          content: '黑色'
        },
        {
          name: '尺寸',
          content: 'M'
        }
      ],
      num: 1
    }
  ],
  totalNum: 1,
  amount: '899.00',
  integral: 198
}]

export default {
  data() {
    return {
      tabs: tabs,
      allOrders: orders,
      status: ''
    }
  },
  beforeRouteEnter (to, from, next) {
    // ...
    const status = to.query.status ? Number(to.query.status) : ''
    next(vm => {
      vm.status = status
    })
  },
  computed: {
    tabIndex() {
      const tabIndex = this.tabs.findIndex(item => item.status === this.status)
      return tabIndex
    },
    orders() {
      const status = this.status
      if (status === '') {
        return this.allOrders
      }
      const orders = []
      this.allOrders && this.allOrders.forEach(item => {
        if (item.status === status) {
          orders.push(item)
        }
      })
      return orders
    }
  },
  methods: {
    changeTab(index) {
      const status = this.tabs[index].status
      this.status = status
    }
  },
  components: {
    Navbar,
    OrderItem
  }
}
</script>

<style lang="scss" scoped>
.my-orders {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: #f4f4f4;
  z-index: 1;
  .header {
    background-color: #fff;
    .tab-wrap {
      display: flex;
      flex-direction: row;
      .tab-item {
        position: relative;
        flex: 1;
        height: 45px;
        display: flex;
        justify-content: center;
        align-items: center;
        .name {
          font-size: 13px;
          color: #333;
        }
        &.active {
          .name {
            color: #F64952;
            font-weight: 500;
          }
          &:after {
            display: block;
            content: '';
            position: absolute;
            bottom: 0;
            width: 48px;
            height: 2px;
            background-color: #F64952;
            animation: width .3s;
          }
        }
      }
    }
  }
  .content {
    position: absolute;
    top: 89px;
    left: 0;
    right: 0;
    bottom: 0;
    .order-list {
      margin-top: 10px;
      .order-item {
        margin-bottom: 10px;
      }
    }
  }
}

@keyframes width {
  0% {
    width: 0
  }
  100% {
    width: 48px;
  }
}
</style>
