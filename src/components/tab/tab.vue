<template>
  <div class="tab">
    <router-link tag="div" class="tab-item" to="/" exact>
      <div class="icon icon-home"></div>
      <span class="tab-link">首页</span>
    </router-link>
    <router-link tag="div" class="tab-item" to="/me" exact>
      <div class="icon icon-me"></div>
      <span class="tab-link">个人</span>
    </router-link>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.tab {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: row;
  background-color: #fff;
  z-index: -1;
  &::before {
    display: block;
    content: '';
    position: absolute;
    top: 0;
    width: 100%;
    height: 1px;
    background-color: #D9D9D9;
    transform: scaleY(.5);
  }
  .tab-item {
    flex: 1;
    height: 54px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .tab-link {
      margin-top: 6px;
      line-height: 10px;
      font-size: 10px;
      color: #BCBCBC;
    }
    .icon {
      width: 22px;
      height: 22px;
      background-size: 22px 22px;
      background-repeat: no-repeat;
      background-position: center;
    }
    .icon-home {
      background-image: url(../../common/image/tab/home.png);
    }
    .icon-me {
      background-image: url(../../common/image/tab/me.png);
    }
    &.router-link-active {
      .tab-link {
        color: #F64952;
      }
      .icon-home {
        background-image: url(../../common/image/tab/home-active.png);
      }
      .icon-me {
        background-image: url(../../common/image/tab/me-active.png);
      }
    }
  }
}
</style>
