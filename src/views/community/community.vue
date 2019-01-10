<template>
  <div class="community">
    <navbar title="利美社区">
      <div slot="right" class="msg extends-click">
        <img
          src="../../common/image/community/icon-message.png"
          alt=""
          class="icon-msg">
      </div>
    </navbar>
    <div class="content">
      <div class="search-wrap">
        <div class="search-box">
          <img
            class="icon-search"
            src="../../common/image/public/icon-search.png"
            alt="">
          <p class="placeholder">大家都在搜“育儿教育”</p>
        </div>
      </div>
      <div class="classification-wrap">
        <cube-scroll
        ref="scroll"
        direction="horizontal">
          <ul class="classification-list">
            <li class="classification-item">
              <span class="name">育儿教育</span>
            </li>
            <li class="classification-item">
              <span class="name">形象品味</span>
            </li>
            <li class="classification-item">
              <span class="name">卫生健康</span>
            </li>
            <li class="classification-item">
              <span class="name">家庭情感</span>
            </li>
            <li class="classification-item">
              <span class="name">法律法务</span>
            </li>
          </ul>
        </cube-scroll>
      </div>
      <div class="article-wrap">
        <cube-scroll>
          <ul class="article-list">
            <article-item
              class="article-item"
              v-for="(item, index) in articles"
              :key="index"
              :article="item" />
          </ul>
        </cube-scroll>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from '../../components/navbar/navbar'
import ArticleItem from '../../components/article-item/article-item'

const articles = [{
  id: 1,
  headImg: require('../../common/image/community/article-img.png'),
  title: '标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题',
  editor: {
    avatar: require('../../common/image/test/avatar.png'),
    name: 'TOTO'
  },
  isLike: false,
  likeNum: 346
}, {
  id: 2,
  headImg: require('../../common/image/community/article-img.png'),
  title: '标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题',
  editor: {
    avatar: require('../../common/image/test/avatar.png'),
    name: 'TOTO'
  },
  isLike: true,
  likeNum: 346
}, {
  id: 3,
  headImg: require('../../common/image/community/article-img.png'),
  title: '标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题',
  editor: {
    avatar: require('../../common/image/test/avatar.png'),
    name: 'GiGi'
  },
  isLike: true,
  likeNum: 346
}, {
  id: 4,
  headImg: require('../../common/image/community/article-img.png'),
  title: '标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题',
  editor: {
    avatar: require('../../common/image/test/avatar.png'),
    name: 'GiGi'
  },
  isLike: true,
  likeNum: 346
}, {
  id: 5,
  headImg: require('../../common/image/community/article-img.png'),
  title: '标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题',
  editor: {
    avatar: require('../../common/image/test/avatar.png'),
    name: 'TOTO'
  },
  isLike: false,
  likeNum: 346
}, {
  id: 6,
  headImg: require('../../common/image/community/article-img.png'),
  title: '标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题',
  editor: {
    avatar: require('../../common/image/test/avatar.png'),
    name: 'TOTO'
  },
  isLike: false,
  likeNum: 346
}, {
  id: 7,
  headImg: require('../../common/image/community/article-img.png'),
  title: '标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题',
  editor: {
    avatar: require('../../common/image/test/avatar.png'),
    name: 'GiGi'
  },
  isLike: true,
  likeNum: 346
}]

export default {
  name: 'community',
  data() {
    return {
      articles: articles
    }
  },
  components: {
    Navbar,
    ArticleItem
  }
}
</script>

<style lang="scss" scoped>
.community {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: #fff;
  z-index: 1;
  .msg {
    display: flex;
    .icon-msg {
      width: 18px;
      height: 18px;
    }
  }
  .content {
    position: absolute;
    top: 44px;
    right: 0;
    bottom: 0;
    left: 0;
    .search-wrap {
      height: 46px;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 0 15px;
      .search-box {
        flex: 1;
        height: 25px;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #F0F0F0;
        border-radius: 3px;
        .icon-search {
          width: 15px;
          height: 15px;
        }
        .placeholder {
          margin-left: 8px;
          font-size: 12px;
          color: #999;
        }
      }
    }
    .classification-wrap {
      height: 40px;
      /deep/ .cube-scroll-content {
        padding: 0 15px;
        display: inline-block;
        vertical-align: top;
        .classification-list {
          white-space: nowrap;
          .classification-item {
            position: relative;
            display: inline-block;
            vertical-align: top;
            width: 69px;
            height: 40px;
            text-align: center;
            line-height: 40px;
            &::after {
              display: block;
              content: '';
              position: absolute;
              right: 0;
              top: 7px;
              width: 1px;
              height: 25px;
              background-color: #ededed;
              transform: scaleX(.5);
            }
            .name {
              display: inline-block;
              vertical-align: top;
              font-size: 12px;
              color: #999;
            }
          }
        }
      }
    }
    .article-wrap {
      position: absolute;
      top: 88px;
      right: 0;
      bottom: 0;
      left: 0;
      background-color: #f4f4f4;
      .article-list {
        padding: 13px 15px;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        .article-item {
          margin-bottom: 10px;
        }
      }
    }
  }
}
</style>
