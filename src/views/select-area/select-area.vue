<template>
  <div class="select-area">
    <navbar title="地区选择" />
    <div class="content">
      <div class="search-wrap">
        <div class="search-box">
          <input type="text" placeholder="请输入关键字搜索">
        </div>
      </div>
      <div class="hot-wrap">
        <div class="title-wrap">
          <h2 class="title">热门城市</h2>
        </div>
        <ul class="city-list">
          <li class="city-item">
            <span class="name">广州</span>
          </li>
          <li class="city-item">
            <span class="name">深圳</span>
          </li>
          <li class="city-item">
            <span class="name">上海</span>
          </li>
          <li class="city-item">
            <span class="name">北京</span>
          </li>
          <li class="city-item">
            <span class="name">厦门</span>
          </li>
        </ul>
      </div>
      <div class="area-wrap">
        <div class="title-wrap">
          <h2 class="title">选择省份</h2>
        </div>
        <div class="area-list-wrap">
          <cube-scroll>
            <ul class="area-list">
              <li class="area-item"
                v-for="(item, index) in areas"
                :key="index"
                @click="selectProvince">
                <div class="name">{{item.name}}</div>
                <img
                  class="icon-right"
                  src="../../common/image/public/icon-right.png"
                  alt="">
              </li>
            </ul>
          </cube-scroll>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from '../../components/navbar/navbar'

export default {
  name: 'select-area',
  data() {
    return {
      areas: [{
        id: 1,
        name: '广东'
      }, {
        id: 2,
        name: '广西'
      }, {
        id: 3,
        name: '海南'
      }, {
        id: 4,
        name: '福建'
      }, {
        id: 5,
        name: '浙江'
      }, {
        id: 6,
        name: '江西'
      }, {
        id: 7,
        name: '云南'
      }, {
        id: 8,
        name: '湖南'
      }, {
        id: 9,
        name: '贵州'
      }, {
        id: 10,
        name: '四川'
      }, {
        id: 11,
        name: '湖北'
      }, {
        id: 12,
        name: '贵州'
      }]
    }
  },
  methods: {
    selectProvince() {
      this.$router.push('/select-city')
    }
  },
  components: {
    Navbar
  }
}
</script>

<style lang="scss" scoped>
.select-area {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: #fff;
  z-index: 1;
  .content {
    position: absolute;
    top: 44px;
    right: 0;
    bottom: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    .search-wrap {
      padding: 0 15px;
      height: 45px;
      display: flex;
      justify-content: center;
      align-items: center;
      .search-box {
        flex: 1;
        height: 25px;
        display: flex;
        align-items: center;
        input {
          flex: 1;
          height: 25px;
          line-height: 15px;
          padding: 0 15px;
          border-radius: 3px;
          background-color: #f0f0f0;
          outline: none;
          font-size: 13px;
          color: #333;
          &::placeholder {
            color: #999;
          }
        }
      }
    }
    .hot-wrap {
      padding: 0 15px;
      .title-wrap {
        height: 30px;
        display: flex;
        align-items: center;
        .title {
          font-weight: 500;
          font-size: 13px;
          color: #666;
        }
      }
      .city-list {
        margin-top: 10px;
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        .city-item {
          height: 18px;
          padding: 0 12px;
          margin-right: 15px;
          margin-bottom: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: #eee;
          border-radius: 3px;
          .name {
            font-weight: 400;
            font-size: 12px;
            color: #333;
          }
        }
      }
    }
    .area-wrap {
      position: relative;
      margin-top: 15px;
      padding: 0 15px;
      flex: 1;
      .title-wrap {
        height: 30px;
        display: flex;
        align-items: center;
        .title {
          font-weight: 500;
          font-size: 13px;
          color: #666;
        }
      }
      .area-list-wrap {
        position: absolute;
        top: 30px;
        left: 0;
        right: 0;
        bottom: 0;
        .area-list {
          padding: 0 15px;
          .area-item {
            position: relative;
            height: 40px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            &::after {
              display: block;
              content: '';
              position: absolute;
              bottom: 0;
              width: 100%;
              height: 1px;
              background-color: #ededed;
              transform: scaleY(.5);
            }
            &:last-child::after {
              display: none;
            }
            .name {
              margin-left: 6px;
              font-weight: 400;
              font-size: 13px;
              color: #333;
            }
            .icon-right {
              margin-right: 7px;
              width: 6px;
              height: 12px;
            }
          }
        }
      }
    }
  }
}
</style>
