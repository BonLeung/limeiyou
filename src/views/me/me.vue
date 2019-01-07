<template>
  <div class="me">
    <cube-scroll>
      <div class="header">
        <div class="setting-wrap">
          <div class="setting">
            <img class="icon-setting" src="../../common/image/me/ic-setting.png" alt="">
          </div>
        </div>
        <div class="user-wrap">
          <div class="avatar-wrap">
            <img src="../../common/image/test/avatar.png" alt="" class="avatar">
          </div>
          <p class="username">Carolyn Meyer</p>
        </div>
        <div class="order-nav-wrap">
          <div class="order-nav-content">
            <div class="bg1"></div>
            <div class="bg2"></div>
            <div class="order-nav">
              <div class="nav-header">
                <h2 class="title">我的订单</h2>
                <router-link class="all" tag="div" to="/my-orders">
                  <span class="text">全部订单</span>
                  <img src="../../common/image/me/icon-right.png" alt="" class="icon-right">
                </router-link>
              </div>
              <ul class="nav-list">
                <li class="nav-item">
                  <img class="icon" src="../../common/image/me/order-nav1.png" alt="">
                  <div class="name">待付款</div>
                </li>
                <li class="nav-item">
                  <img class="icon" src="../../common/image/me/order-nav2.png" alt="">
                  <div class="name">待发货</div>
                </li>
                <li class="nav-item">
                  <img class="icon" src="../../common/image/me/order-nav3.png" alt="">
                  <div class="name">待收货</div>
                </li>
                <li class="nav-item">
                  <img class="icon" src="../../common/image/me/order-nav4.png" alt="">
                  <div class="name">待评价</div>
                </li>
                <li class="nav-item">
                  <img class="icon" src="../../common/image/me/order-nav5.png" alt="">
                  <div class="name">退款售后</div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="content">
        <ul class="nav-list">
          <li class="nav-item">
            <div class="nav-content">
              <img src="../../common/image/me/icon-gift.png" alt="" class="icon">
              <span class="name">我的利美福利</span>
            </div>
            <img src="../../common/image/me/icon-right.png" alt="" class="icon-right">
          </li>
          <li class="nav-item">
            <div class="nav-content">
              <img src="../../common/image/me/icon-beauty.png" alt="" class="icon">
              <span class="name">我的利美佳人</span>
            </div>
            <img src="../../common/image/me/icon-right.png" alt="" class="icon-right">
          </li>
          <li class="nav-item">
            <div class="nav-content">
              <img src="../../common/image/me/icon-wallet.png" alt="" class="icon">
              <span class="name">我的钱包</span>
            </div>
            <img src="../../common/image/me/icon-right.png" alt="" class="icon-right">
          </li>
          <li class="nav-item">
            <div class="nav-content">
              <img src="../../common/image/me/icon-qrcode.png" alt="" class="icon">
              <span class="name">我的二维码</span>
            </div>
            <img src="../../common/image/me/icon-right.png" alt="" class="icon-right">
          </li>
          <li class="nav-item">
            <div class="nav-content">
              <img src="../../common/image/me/icon-address.png" alt="" class="icon">
              <span class="name">我的地址</span>
            </div>
            <img src="../../common/image/me/icon-right.png" alt="" class="icon-right">
          </li>
          <li class="nav-item">
            <div class="nav-content">
              <img src="../../common/image/me/icon-message.png" alt="" class="icon">
              <span class="name">我的消息</span>
            </div>
            <img src="../../common/image/me/icon-right.png" alt="" class="icon-right">
          </li>
          <li class="nav-item">
            <div class="nav-content">
              <img src="../../common/image/me/icon-lock.png" alt="" class="icon">
              <span class="name">修改密码</span>
            </div>
            <img src="../../common/image/me/icon-right.png" alt="" class="icon-right">
          </li>
          <li class="nav-item">
            <div class="nav-content">
              <img src="../../common/image/me/icon-contact.png" alt="" class="icon">
              <span class="name">联系客服</span>
            </div>
            <img src="../../common/image/me/icon-right.png" alt="" class="icon-right">
          </li>
          <li class="nav-item">
            <div class="nav-content">
              <img src="../../common/image/me/icon-about.png" alt="" class="icon">
              <span class="name">关于我们</span>
            </div>
            <img src="../../common/image/me/icon-right.png" alt="" class="icon-right">
          </li>
        </ul>
      </div>
    </cube-scroll>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.me {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 54px;
  left: 0;
  background-color: #f4f4f4;
  .header {
    height: 309px;
    display: flex;
    flex-direction: column;
    background-image: linear-gradient(131deg,rgba(246,73,82,1),rgba(255,89,98,1));
    background-size: 100% 230px;
    background-repeat: no-repeat;
    .setting-wrap {
      width: 100%;
      height: 34px;
      padding: 0 15px;
      display: flex;
      flex-direction: row;
      justify-content: flex-end;
      box-sizing: border-box;
      .setting {
        height: 34px;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        .icon-setting {
          width: 18px;
          height: 18px;
        }
      }
    }
    .user-wrap {
      margin: 0 auto;
      display: flex;
      flex-direction: column;
      align-items: center;
      .avatar-wrap {
        width: 90px;
        height: 90px;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #fff;
        border-radius: 50%;
        box-shadow: 0px 0px 10px 0px rgba(255,237,175,0.5);
        .avatar {
          width: 82px;
          height: 84px;
          background-color: #ccc;
          border-radius: 50%;
        }
      }
      .username {
        margin-top: 8px;
        height: 16px;
        line-height: 17px;
        font-size: 17px;
        font-weight: 500;
        color: #fff;
      }
    }
    .order-nav-wrap {
      margin-top: 26px;
      width: 100%;
      padding: 0 15px;
      background: transparent;
      box-sizing: border-box;
      .order-nav-content {
        position: relative;
        .order-nav {
          position: absolute;
          top: 20px;
          width: 100%;
          background-color: #fff;
          z-index: 2;
          .nav-header {
            position: relative;
            height: 36px;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            padding: 0 12px;
            &::after {
              display: block;
              content: '';
              position: absolute;
              bottom: 0;
              left: 0;
              right: 0;
              height: 1px;
              background-color: #eee;
              transform: scaleY(.5);
            }
            .title {
              font-weight: 500;
              font-size: 12px;
              color: #333;
            }
            .all {
              display: flex;
              align-items: center;
              .text {
                margin-right: 5px;
                font-size: 12px;
                color: #999;
              }
              .icon-right {
                width: 6px;
                height: 10px;
              }
            }
          }
          .nav-list {
            display: flex;
            flex-direction: row;
            align-items: center;
            .nav-item {
              flex: 1;
              height: 79px;
              display: flex;
              flex-direction: column;
              align-items: center;
              justify-content: center;
              .icon {
                width: 28px;
                height: 28px;
              }
              .name {
                margin-top: 8px;
                line-height: 11px;
                font-size: 11px;
                color: #999;
              }
            }
          }
        }
        .bg1 {
          position: absolute;
          top: 0;
          left: 25px;
          right: 25px;
          height: 98px;
          background-color: rgba(255, 255, 255, .6);
          z-index: 0;
        }
        .bg2 {
          position: absolute;
          top: 10px;
          left: 15px;
          right: 15px;
          height: 98px;
          background-color: rgba(255, 255, 255, .8);
          z-index: 1;
        }
      }
    }
  }
  .content {
    margin-top: 10px;
    margin-bottom: 10px;
    background-color: #fff;
    .nav-list {
      padding: 0 15px;
      .nav-item {
        position: relative;
        height: 45px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        &::after {
          display: block;
          content: '';
          position: absolute;
          bottom: 0;
          width: 100%;
          height: 1px;
          background-color: #eee;
          transform: scaleY(.5);
        }
        &:last-child::after {
          display: none;
        }
        .nav-content {
          display: flex;
          align-items: center;
          .icon {
            margin-left: 5px;
            width: 25px;
            height: 25px;
          }
          .name {
            margin-left: 15px;
            font-size: 12px;
            color: #999;
          }
        }
        .icon-right {
          margin-right: 10px;
          width: 6px;
          height: 10px;
        }
      }
    }
  }
}
</style>
