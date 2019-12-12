<template>
  <div class="add-address">
    <navbar title="添加收货地址">
      <div
        class="save-btn extends-click"
        slot="right"
      >保存</div>
    </navbar>
    <div class="content">
      <cube-scroll>
        <div class="form-wrap">
          <div class="form-row">
            <div class="label">收货人</div>
            <input type="text" placeholder="请输入真实姓名">
          </div>
          <div class="form-row">
            <div class="label">手机号</div>
            <input type="text" placeholder="请输入收货手机号">
          </div>
          <div class="form-row">
            <div class="label">所在地区</div>
            <input type="text" placeholder="请输入所在地区">
          </div>
          <div class="form-row">
            <div class="label">详细地址</div>
            <input type="text" placeholder="请输入详细地址">
          </div>
          <div class="form-row">
            <div class="label">设为默认地址</div>
            <div
              class="switch"
              :class="isDefault ? 'active' : ''"
              @click="changeDefault()">
            </div>
          </div>
        </div>
      </cube-scroll>
    </div>
  </div>
</template>
<script>
import Navbar from '../../components/navbar/navbar'

export default {
  name: 'add-address',
  data() {
    return {
      isDefault: true
    }
  },
  methods: {
    changeDefault() {
      this.isDefault = !this.isDefault
    }
  },
  components: {
    Navbar
  }
}
</script>

<style lang="scss" scoped>
.add-address {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: #fff;
  .save-btn {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 12px;
    color: #F64952;
  }
  .content {
    position: absolute;
    top: 44px;
    right: 0;
    bottom: 0;
    left: 0;
    .form-wrap {
      padding: 0 20px;
      .form-row {
        position: relative;
        height: 50px;
        display: flex;
        align-items: center;
        justify-content: space-between;
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
        .label {
          width: 80px;
          font-size: 13px;
          color: #333;
        }
        input {
          padding: 0 5px;
          flex: 1;
          height: 100%;
          outline: none;
          font-size: 12px;
          color: #333;
          &::placeholder {
            color: #999;
          }
        }
        .switch {
          position: relative;
          width: 40px;
          height: 20px;
          border-radius: 10px;
          background-color: #e4e4e4;
          border: 1px solid #e4e4e4;
          box-sizing: border-box;
          transition: all .4s cubic-bezier(.25, .1, .25, 1.28);
          &::after {
            display: block;
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 18px;
            height: 18px;
            border-radius: 9px;
            background-color: #fff;
            transition: all .4s cubic-bezier(.25, .1, .25, 1.28);
          }
          &.active {
            background-color: #F64952;
            border: 1px solid #F64952;
          }
          &.active::after {
            transform: translateX(20px);
          }
        }
      }
    }
  }
}
</style>
