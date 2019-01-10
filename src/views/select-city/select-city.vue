<template>
  <div class="select-city">
    <navbar title="选择地区" />
    <div class="content">
      <div class="city-wrap">
        <div class="title-wrap">
          <h2 class="title">选择城市</h2>
        </div>
        <div class="city-list-wrap">
          <cube-scroll>
            <ul class="city-list">
              <li class="city-item">
                <div class="name">广州</div>
              </li>
              <li class="city-item">
                <div class="name">深圳</div>
              </li>
              <li class="city-item">
                <div class="name">东莞</div>
              </li>
              <li class="city-item">
                <div class="name">梅州</div>
              </li>
              <li class="city-item">
                <div class="name">汕头</div>
              </li>
              <li class="city-item">
                <div class="name">惠州</div>
              </li>
              <li class="city-item">
                <div class="name">湛江</div>
              </li>
              <li class="city-item">
                <div class="name">情愿</div>
              </li>
              <li class="city-item">
                <div class="name">茂名</div>
              </li>
              <li class="city-item">
                <div class="name">中山</div>
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
  name: 'select-city',
  components: {
    Navbar
  }
}
</script>

<style lang="scss" scoped>
.select-city {
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
    .city-wrap {
      position: relative;
      flex: 1;
      .title-wrap {
        padding: 0 15px;
        height: 35px;
        display: flex;
        align-items: center;
        .title {
          font-size: 13px;
          font-weight: 500;
          color: #666;
        }
      }
      .city-list-wrap {
        position: absolute;
        top: 30px;
        right: 0;
        bottom: 0;
        left: 0;
        .city-list {
          padding: 0 15px;
          .city-item {
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
            .name {
              margin-left: 6px;
              font-size: 13px;
              font-weight: 400;
              color: #333;
            }
          }
        }
      }
    }
  }
}
</style>
