<template>
  <div class="classification">
    <navbar title="分类">
      <div slot="right" class="search extends-click">
        <img class="icon" src="../../common/image/mall/icon-search.png" alt="">
      </div>
    </navbar>
    <div class="content" v-if="datas.length > 0">
      <div class="menu">
        <cube-scroll>
          <ul class="menu-list">
            <li
              class="menu-item"
              :class="index === currentIndex ? 'active' : ''"
              v-for="(item, index) in datas"
              :key="index"
              @click="changeIndex(index)">{{item.name}}</li>
          </ul>
        </cube-scroll>
      </div>
      <div class="panel">
        <cube-scroll>
          <div class="classification-wrap">
            <div class="title-wrap">
              <div class="line"></div>
              <h2 class="title">{{datas[currentIndex].name}}</h2>
              <div class="line"></div>
            </div>
            <ul class="classification-list">
              <router-link
                tag="li"
                :to="{path: '/goods-list', query: {title: item.name}}"
                class="classification-item"
                v-for="(item, index) in datas[currentIndex].items"
                :key="index">
                <img :src="item.img" alt="">
                <div class="name">{{item.name}}</div>
              </router-link>
            </ul>
          </div>
        </cube-scroll>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from '../../components/navbar/navbar'

const datas = [{
  id: 1,
  name: '为您推荐',
  items: [{
    img: require('../../common/image/test/classification-1.png'),
    name: 'T恤'
  }, {
    img: require('../../common/image/test/classification-1.png'),
    name: '衬衫'
  }, {
    img: require('../../common/image/test/classification-1.png'),
    name: '大衣'
  }, {
    img: require('../../common/image/test/classification-1.png'),
    name: '卫衣'
  }, {
    img: require('../../common/image/test/classification-1.png'),
    name: '西装'
  }, {
    img: require('../../common/image/test/classification-1.png'),
    name: '羽绒服'
  }]
}, {
  id: 2,
  name: '衣帽',
  items: [{
    img: require('../../common/image/test/classification-1.png'),
    name: 'T恤'
  }, {
    img: require('../../common/image/test/classification-1.png'),
    name: '衬衫'
  }, {
    img: require('../../common/image/test/classification-1.png'),
    name: '大衣'
  }, {
    img: require('../../common/image/test/classification-1.png'),
    name: '卫衣'
  }, {
    img: require('../../common/image/test/classification-1.png'),
    name: '西装'
  }, {
    img: require('../../common/image/test/classification-1.png'),
    name: '羽绒服'
  }]
}, {
  id: 3,
  name: '美妆',
  items: [{
    img: require('../../common/image/test/classification-1.png'),
    name: 'T恤'
  }, {
    img: require('../../common/image/test/classification-1.png'),
    name: '衬衫'
  }, {
    img: require('../../common/image/test/classification-1.png'),
    name: '大衣'
  }, {
    img: require('../../common/image/test/classification-1.png'),
    name: '卫衣'
  }, {
    img: require('../../common/image/test/classification-1.png'),
    name: '西装'
  }, {
    img: require('../../common/image/test/classification-1.png'),
    name: '羽绒服'
  }]
}, {
  id: 4,
  name: '饰品',
  items: [{
    img: require('../../common/image/test/classification-1.png'),
    name: 'T恤'
  }, {
    img: require('../../common/image/test/classification-1.png'),
    name: '衬衫'
  }, {
    img: require('../../common/image/test/classification-1.png'),
    name: '大衣'
  }, {
    img: require('../../common/image/test/classification-1.png'),
    name: '卫衣'
  }, {
    img: require('../../common/image/test/classification-1.png'),
    name: '西装'
  }, {
    img: require('../../common/image/test/classification-1.png'),
    name: '羽绒服'
  }]
}, {
  id: 5,
  name: '美妆',
  items: [{
    img: require('../../common/image/test/classification-1.png'),
    name: 'T恤'
  }, {
    img: require('../../common/image/test/classification-1.png'),
    name: '衬衫'
  }, {
    img: require('../../common/image/test/classification-1.png'),
    name: '大衣'
  }, {
    img: require('../../common/image/test/classification-1.png'),
    name: '卫衣'
  }, {
    img: require('../../common/image/test/classification-1.png'),
    name: '西装'
  }, {
    img: require('../../common/image/test/classification-1.png'),
    name: '羽绒服'
  }]
}, {
  id: 6,
  name: '饰品',
  items: [{
    img: require('../../common/image/test/classification-1.png'),
    name: 'T恤'
  }, {
    img: require('../../common/image/test/classification-1.png'),
    name: '衬衫'
  }, {
    img: require('../../common/image/test/classification-1.png'),
    name: '大衣'
  }, {
    img: require('../../common/image/test/classification-1.png'),
    name: '卫衣'
  }, {
    img: require('../../common/image/test/classification-1.png'),
    name: '西装'
  }, {
    img: require('../../common/image/test/classification-1.png'),
    name: '羽绒服'
  }]
}]

export default {
  name: 'classificaiton',
  data() {
    return {
      datas: datas,
      currentIndex: 0
    }
  },
  beforeRouteEnter (to, from, next) {
    // ...
    const id = to.query.id
    next(vm => {
      if (id) {
        const index = vm.datas.findIndex(item => item.id === id)
        vm.currentIndex = index
      }
    })
  },
  methods: {
    changeIndex(index) {
      this.currentIndex = index
    }
  },
  components: {
    Navbar
  }
}
</script>

<style lang="scss" scoped>
.classification {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: #fff;
  z-index: 1;
  .search {
    display: flex;
    .icon {
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
    display: flex;
    background-color: #fff;
    .menu {
      flex: 0 0 100px;
      background: #F3F3F3;
      .menu-list {
        background: #fff;
        .menu-item {
          position: relative;
          margin-bottom: 1px;
          width: 100px;
          height: 50px;
          display: flex;
          justify-content: center;
          align-items: center;
          background: #F3F3F3;
          font-size: 13px;
          color: #333;
          &.active {
            background-color: #fff;
            &::after {
              display: block;
              content: '';
              position: absolute;
              left: 0;
              top: 0;
              width: 3px;
              height: 100px;
              background-color: #F64952;
            }
          }
        }
      }
    }
    .panel {
      flex: 1;
      padding: 0 15px;
      .classification-wrap {
        .title-wrap {
          margin-top: 15px;
          display: flex;
          align-items: center;
          justify-content: center;
          .line {
            width: 30px;
            height: 1px;
            background-color: #333;
            transform: scaleY(.5);
          }
          .title {
            padding: 0 15px;
            line-height: 20px;
            font-size: 13px;
            color: #333;
          }
        }
        .classification-list {
          margin-top: 15px;
          display: flex;
          flex-wrap: wrap;
          .classification-item {
            flex: 0 0 75px;
            width: 75px;
            margin-right: 10px;
            margin-bottom: 15px;
            display: flex;
            flex-direction: column;
            &:nth-child(3n) {
              margin-right: 0;
            }
            img {
              width: 75px;
              height: 75px;
              background-color: #F4F4F4;
            }
            .name {
              height: 25px;
              display: flex;
              justify-content: center;
              align-items: center;
              font-size: 10px;
              color: #999;
            }
          }
        }
      }
    }
  }
}
</style>
