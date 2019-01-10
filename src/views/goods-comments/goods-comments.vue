<template>
  <div class="goods-comments">
    <navbar title="评论(150)" />
    <div class="content">
      <cube-scroll>
        <ul class="comment-list">
          <li class="comment-item" v-for="(item, index) in comments" :key="index">
            <img :src="item.user.avatar" alt="" class="avatar">
            <div class="detail">
              <div class="name">{{item.user.name}}</div>
              <p class="comment">{{item.comment}}</p>
              <p class="time">{{item.time}}</p>
              <ul class="img-list" v-if="item.imgs.length > 0">
                <li class="img-item" v-for="(item, index) in item.imgs" :key="index">
                  <img :src="item" alt="">
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </cube-scroll>
    </div>
  </div>
</template>

<script>
import Navbar from '../../components/navbar/navbar'

export default {
  name: 'goods-comments',
  data() {
    return {
      comments: [{
        id: 1,
        user: {
          name: '桃妞妞',
          avatar: require('../../common/image/test/avatar.png')
        },
        comment: '这一套也太好看了叭！求链接啊！',
        time: '12-08 10:39',
        imgs: [
          require('../../common/image/test/goods-img.png'),
          require('../../common/image/test/goods-img.png'),
          require('../../common/image/test/goods-img.png')
        ]
      }, {
        id: 2,
        user: {
          name: '桃妞妞',
          avatar: require('../../common/image/test/avatar.png')
        },
        comment: '这一套也太好看了叭！求链接啊！',
        time: '12-08 10:39',
        imgs: [
          require('../../common/image/test/goods-img.png'),
          require('../../common/image/test/goods-img.png'),
          require('../../common/image/test/goods-img.png')
        ]
      }, {
        id: 3,
        user: {
          name: '桃妞妞',
          avatar: require('../../common/image/test/avatar.png')
        },
        comment: '这一套也太好看了叭！求链接啊！',
        time: '12-08 10:39',
        imgs: [
        ]
      }, {
        id: 4,
        user: {
          name: '桃妞妞',
          avatar: require('../../common/image/test/avatar.png')
        },
        comment: '这一套也太好看了叭！求链接啊！',
        time: '12-08 10:39',
        imgs: [
        ]
      }, {
        id: 5,
        user: {
          name: '桃妞妞',
          avatar: require('../../common/image/test/avatar.png')
        },
        comment: '这一套也太好看了叭！求链接啊！',
        time: '12-08 10:39',
        imgs: [
        ]
      }, {
        id: 6,
        user: {
          name: '桃妞妞',
          avatar: require('../../common/image/test/avatar.png')
        },
        comment: '这一套也太好看了叭！求链接啊！',
        time: '12-08 10:39',
        imgs: [
        ]
      }]
    }
  },
  components: {
    Navbar
  }
}
</script>

<style lang="scss" scoped>
.goods-comments {
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
    .comment-list {
      padding: 0 15px;
      .comment-item {
        position: relative;
        padding: 18px 0 15px;
        display: flex;
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
        .avatar {
          margin-top: 3px;
          width: 25px;
          height: 25px;
        }
        .detail {
          flex: 1;
          margin-left: 10px;
          .name {
            font-size: 13px;
            font-weight: 500;
            color: #333;
          }
          .comment {
            margin-top: 5px;
            line-height: 15px;
            font-size: 13px;
            font-weight: 400;
            color: #333;
          }
          .time {
            margin-top: 5px;
            font-size: 10px;
            color: #999;
          }
          .img-list {
            margin-top: 15px;
            display: flex;
            align-items: center;
            flex-wrap: wrap;
            img {
              margin-right: 6px;
              width: 70px;
              height: 70px;
            }
          }
        }
      }
    }
  }
}
</style>
