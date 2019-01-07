<template>
  <div class="home">
    <cube-scroll>
      <div class="header">
        <div class="header-bar">
          <div class="location-wrap">
            <span class="location">广州</span>
            <img src="../../common/image/home/icon-down.png" alt="" class="icon-down">
          </div>
          <div class="search-wrap">
            <img src="../../common/image/home/icon-search.png" alt="" class="icon-search">
            <div class="placeholder">利美优</div>
          </div>
          <div class="msg-wrap">
            <img src="../../common/image/home/icon-msg.png" alt="" class="icon-msg">
          </div>
          <div class="share-wrap">
            <img src="../../common/image/home/icon-share.png" alt="" class="icon-share">
          </div>
        </div>
        <div class="swiper">
          <cube-slide ref="slide" :data="items">
            <cube-slide-item v-for="(item, index) in items" :key="index">
              <img :src="item.image" alt="" class="banner">
            </cube-slide-item>
          </cube-slide>
        </div>
      </div>
      <div class="content">
        <div class="action-nav">
          <div class="nav-item">
            <img src="../../common/image/home/bg1.png" alt="">
            <div class="name">申请<br>业主</div>
          </div>
           <div class="nav-item">
            <img src="../../common/image/home/bg2.png" alt="">
            <div class="name">申请<br>楼长</div>
          </div>
           <div class="nav-item">
            <img src="../../common/image/home/bg3.png" alt="">
            <div class="name">申请<br>区长</div>
          </div>
           <div class="nav-item">
            <img src="../../common/image/home/bg4.png" alt="">
            <div class="name">申请<br>店长</div>
          </div>
           <div class="nav-item">
            <img src="../../common/image/home/bg5.png" alt="">
            <div class="name">商家<br>入驻</div>
          </div>
        </div>
        <div class="advertisement-wrap">
          <div class="advertisement-item">
            <img src="../../common/image/home/advertisement.png" alt="">
          </div>
        </div>
        <div class="main-nav">
          <router-link tag="div" to="/mall" class="nav-item">
            <img src="../../common/image/home/mall.png" alt="">
          </router-link>
          <div class="nav-item">
            <img src="../../common/image/home/community.png" alt="">
          </div>
        </div>
      </div>
    </cube-scroll>
  </div>
</template>

<script>

export default {
  name: 'home',
  data() {
    return {
      items: [{
        image: require('../../common/image/test/banner.png')
      }, {
        image: require('../../common/image/test/banner.png')
      }]
    }
  },
  components: {
  }
}
</script>

<style lang="scss" scoped>
.home {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 54px;
  left: 0;
  background-color: #fff;
  .header {
    position: relative;
    .swiper {
      height: 250px;
      .banner {
        width: 100%;
        height: 250px;
      }
      /deep/ .cube-slide-dots {
        bottom: 10px;
        span {
          width: 10px;
          height: 2px;
          border-radius: 2px;
          background: rgba(255, 255, 255, .5);
          &.active {
            background: #fff;
          }
        }
      }
    }
    .header-bar {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 44px;
      z-index: 10;
      display: flex;
      flex-direction: row;
      align-items: center;
      padding: 0 15px;
      box-sizing: border-box;
      .location-wrap {
        display: flex;
        flex-direction: row;
        align-items: center;
        .location {
          font-size: 12px;
          color: #fff;
        }
        .icon-down {
          margin-left: 4px;
          width: 8px;
          height: 4px;
        }
      }
      .search-wrap {
        margin: 0 10px;
        flex: 1;
        height: 25px;
        display: flex;
        flex-direction: row;
        align-items: center;
        background-color: #fff;
        border-radius: 3px;
        .icon-search {
          margin-left: 10px;
          width: 14px;
          height: 14px;
        }
        .placeholder {
          margin-left: 10px;
          font-size: 12px;
          color: #999;
        }
      }
      .msg-wrap {
        width: 25px;
        height: 44px;
        display: flex;
        justify-content: center;
        align-items: center;
        .icon-msg {
          width: 15px;
          height: 15px;
        }
      }
      .share-wrap {
        width: 25px;
        height: 44px;
        display: flex;
        justify-content: center;
        align-items: center;
        .icon-share {
          width: 15px;
          height: 15px;
        }
      }
    }
  }
  .content {
    padding: 15px;
    .action-nav {
      display: flex;
      flex-direction: row;
      .nav-item {
        position: relative;
        flex: 1;
        height: 85px;
        margin-right: 5px;
        &:last-child {
          margin-right: 0;
        }
        img {
          width: 100%;
          height: 100%;
        }
        .name {
          position: absolute;
          right: 8px;
          bottom: 8px;
          line-height: 13px;
          font-size: 11px;
          color: #fff;
        }
      }
    }
    .advertisement-wrap {
      margin-top: 15px;
      .advertisement-item {
        width: 100%;
        height: 122px;
        img {
          width: 100%;
          height: 100%;
        }
      }
    }
    .main-nav {
      margin-top: 15px;
      display: flex;
      flex-direction: row;
      .nav-item {
        flex: 1;
        height: 110px;
        margin-right: 15px;
        &:last-child {
          margin-right: 0;
        }
        img {
          width: 100%;
          height: 100%;
        }
      }
    }
  }
}
</style>
