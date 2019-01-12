<template>
  <div class="navbar">
    <div class="back-wrap extends-click" @click="back">
      <img class="icon" src="../../common/image/public/icon-back.png" alt="">
    </div>
    <div class="title-wrap">
      <h2 class="title">{{title}}</h2>
    </div>
    <div class="right-wrap">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: ''
    }
  },
  methods: {
    back() {
      // this.$router.go(-1)
      this.$router.goBack()
    }
  }
}
</script>

<style lang="scss" scoped>
.navbar {
  position: relative;
  height: 44px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 15px;
  &::after {
    display: block;
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 1px;
    background-color: #EDEDED;
    transform: scaleY(.5);
  }
  .back-wrap {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    .icon {
      width: 6px;
      height: 13px;
    }
  }
  .title-wrap {
    position: absolute;
    left: 31px;
    right: 31px;
    top: 0;
    height: 44px;
    display: flex;
    justify-content: center;
    align-items: center;
    .title {
      padding: 0 10px;
      line-height: 20px;
      font-weight: 500;
      font-size: 16px;
      color: #333;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }
  .right-wrap {
    height: 44px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
