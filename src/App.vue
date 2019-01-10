<template>
  <div id="app">
    <transition :name="transionName">
      <keep-alive>
        <router-view />
      </keep-alive>
    </transition>
    <tab v-show="showTab" />
  </div>
</template>

<script>

import Tab from './components/tab/tab'

export default {
  data() {
    return {
      transionName: 'slide-right',
      showTab: false
    }
  },
  components: {
    Tab
  },
  watch: {
    '$route'(to, from) {
      // 仅在首页和个人中心显示 tab
      if (to.path === '/' || to.path === '/me') {
        this.showTab = true
      } else {
        this.showTab = false
      }
      // 判断是前进还是后退进行对应的入场出场动画
      let isBack = this.$router.isBack
      if (!isBack && (to.path === '/' || to.path === '/me')) {
        this.transionName = ''
        this.$router.isBack = false
        return
      }
      if (isBack) {
        this.transionName = 'slide-right'
      } else {
        this.transionName = 'slide-left'
      }
      this.$router.isBack = false
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'PingFang SC', 'STHeitiSC-Light', 'Helvetica-Light', arial, sans-serif, 'Droid Sans Fallback';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  user-select: none;
  -webkit-tap-highlight-color: transparent;
}

.slide-right-enter-active, .slide-right-leave-active,
.slide-left-enter-active, .slide-left-leave-active {
  transition: all .3s linear;
}
.slide-left-enter, .slide-right-leave-active {
  opacity: 0;
  transform: translate(100%, 0)
}
.slide-right-enter,
.slide-left-leave-active {
  opacity: 0;
  transform: translate(0, 0);
}
</style>
