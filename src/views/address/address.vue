<template>
  <div class="address">
    <navbar title="我的收货地址">
      <div
        class="add"
        slot="right"
        @click="() => this.$router.push('/add-address')"
      >添加</div>
    </navbar>
    <div class="content">
      <cube-scroll>
        <ul class="address-list">
          <li class="address-item" v-for="(item, index) in addressList" :key="index">
            <div
              class="radio extends-click"
              :class="selectedAddressId == item.id ? 'checked' : ''"
              @click="selectAddress(item)"
            >
              <img v-if="selectedAddressId == item.id" src="../../common/image/mall/icon-select-active.png" alt="" class="icon">
              <img v-else src="../../common/image/mall/icon-select-default.png" alt="" class="icon">
            </div>
            <div class="address-info">
              <div class="user">
                <div class="name">{{item.name}}</div>
                <div class="phone">{{item.phone}}</div>
              </div>
              <p class="detail"><span class="default" v-if="item.default">默认</span>广东省广州市天河区珠江东路12号高德置地冬广场H座2608</p>
            </div>
            <div class="edit">编辑</div>
          </li>
        </ul>
      </cube-scroll>
    </div>
  </div>
</template>

<script>
import Navbar from '../../components/navbar/navbar'

export default {
  name: 'delivery-address',
  data() {
    return {
      addressList: [{
        id: 1,
        name: '李PP',
        phone: '13900000000',
        detail: '广东省广州市天河区珠江东路12号高德置地冬广场H座2608',
        default: true
      }, {
        id: 2,
        name: '李PP',
        phone: '13900000000',
        detail: '广东省广州市天河区珠江东路12号高德置地冬广场H座2608',
        default: false
      }, {
        id: 3,
        name: '李PP',
        phone: '13900000000',
        detail: '广东省广州市天河区珠江东路12号高德置地冬广场H座2608',
        default: false
      }, {
        id: 4,
        name: '李PP',
        phone: '13900000000',
        detail: '广东省广州市天河区珠江东路12号高德置地冬广场H座2608',
        default: false
      }, {
        id: 5,
        name: '李PP',
        phone: '13900000000',
        detail: '广东省广州市天河区珠江东路12号高德置地冬广场H座2608',
        default: false
      }],
      selectedAddressId: 1
    }
  },
  methods: {
    selectAddress(address) {
      this.selectedAddressId = address.id
    }
  },
  components: {
    Navbar
  }
}
</script>

<style lang="scss" scoped>
.address {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: #fff;
  .add {
    font-size: 12px;
    color: #F64952;
  }
  .content {
    position: absolute;
    top: 44px;
    right: 0;
    bottom: 0;
    left: 0;
    .address-list {
      padding: 0 15px;
      .address-item {
        position: relative;
        display: flex;
        align-items: center;
        padding: 16px 0;
        &::after {
          display: block;
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 1px;
          background-color: #ededed;
          transform: scaleY(.5);
        }
        .radio {
          position: relative;
          width: 18px;
          height: 18px;
          display: flex;
          justify-content: center;
          align-items: center;
          .icon {
            width: 18px;
            height: 18px;
          }
        }
        .address-info {
          flex: 1;
          margin-left: 20px;
          .user {
            display: flex;
            align-items: center;
            line-height: 18px;
            .name {
              font-size: 14px;
              color: #333;
            }
            .phone {
              margin-left: 18px;
              font-size: 14px;
              color: #333;
            }
          }
          .detail {
            margin-top: 10px;
            width: 250px;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 2;
            overflow: hidden;
            text-overflow: ellipsis;
            line-height: 18px;
            font-size: 13px;
            color: #666;
            .default {
              margin-right: 5px;
              display: inline-flex;
              vertical-align: top;
              width: 32px;
              height: 15px;
              line-height: 15px;
              justify-content: center;
              align-items: center;
              background-color: #FFD0D2;
              font-size: 10px;
              color: #F64952;
            }
          }
        }
        .edit {
          position: relative;
          flex: 0 0 40px;
          width: 40px;
          height: 30px;
          display: flex;
          justify-content: flex-end;
          align-items: center;
          font-size: 13px;
          color: #333;
          &::after {
            display: block;
            content: '';
            position: absolute;
            left: 0;
            top: 0;
            bottom: 0;
            width: 1px;
            background-color: #ededed;
            transform: scaleX(.5);
          }
        }
      }
    }
  }
}

@keyframes scale {
  0% {
    transform-origin: 0 0;
    transform: scale(0) translate3d(-50%, -50%, 0);
  }
  100% {
    transform-origin: 0 0;
    transform: scale(1) translate3d(-50%, -50%, 0);
  }
}
</style>
