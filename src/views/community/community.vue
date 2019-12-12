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
            <li class="classification-item"
              v-for="(item, index) in classifications"
              :key="index"
              :class="item.id === selectedPrimaryClassId ? 'active' : ''"
              @click="selectPrimaryClassification(item)">
              <span class="name">{{item.name}}</span>
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
      <div class="sub-classification-wrap">
        <transition name="slide">
          <ul class="sub-classification-list" v-show="modalShow">
            <li
              v-for="(item, index) in secondaryClassifications"
              :key="index"
              class="sub-classification"
              @click="selectSecondaryClassification(item)"
              >
              <div class="name">{{item.name}}</div>
              <img
                src="../../common/image/community/icon-selected.png"
                alt=""
                class="icon-selected"
                v-if="item.id === selectedSecondaryClassId">
            </li>
          </ul>
        </transition>
      </div>
      <transition name="fade">
        <div
          class="mask"
          v-show="modalShow"
          @click="hideModal">
        </div>
      </transition>
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
  isLike: false,
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

const classifications = [{
  id: 1,
  name: '育儿教育',
  items: [{
    id: 1,
    name: '教育专家'
  }, {
    id: 2,
    name: '宝贝才艺'
  }]
}, {
  id: 2,
  name: '形象品味',
  items: [{
    id: 3,
    name: '形象品味'
  }, {
    id: 4,
    name: '形象品味'
  }]
}, {
  id: 3,
  name: '卫生健康',
  items: [{
    id: 5,
    name: '卫生健康'
  }, {
    id: 6,
    name: '卫生健康'
  }]
}, {
  id: 4,
  name: '家庭情感',
  items: [{
    id: 7,
    name: '家庭情感'
  }, {
    id: 8,
    name: '家庭情感'
  }]
}, {
  id: 5,
  name: '法律法务',
  items: [{
    id: 9,
    name: '法律法务'
  }, {
    id: 10,
    name: '法律法务'
  }]
}]

export default {
  name: 'community',
  data() {
    return {
      articles: articles,
      modalShow: false,
      classifications: classifications,
      clickPrimaryClassId: '', // 点击的一级分类
      selectedPrimaryClassId: '',
      selectedSecondaryClassId: ''
    }
  },
  computed: {
    secondaryClassifications() {
      const index = this.classifications.findIndex(item => item.id === this.clickPrimaryClassId)
      if (index !== -1) {
        return this.classifications[index].items
      }
      return []
    }
  },
  methods: {
    selectPrimaryClassification(item) {
      this.clickPrimaryClassId = item.id
      this.showModal()
    },
    selectSecondaryClassification(item) {
      this.selectedSecondaryClassId = item.id
      this.selectedPrimaryClassId = this.clickPrimaryClassId
      this.hideModal()
    },
    hideModal() {
      this.modalShow = false
    },
    showModal() {
      if (this.modalShow === true) {
        return
      }
      this.modalShow = true
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
            &:last-child::after {
              display: none;
            }
            &.active {
              .name {
                font-weight: 500;
                color: #F64952;
              }
            }
            .name {
              display: inline-block;
              vertical-align: top;
              font-size: 12px;
              color: #333;
            }
          }
        }
      }
    }
    .mask {
      position: fixed;
      top: 130px;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: rgba(0, 0, 0, .5);
      z-index: 1;
    }
    .sub-classification-wrap {
      position: fixed;
      top: 130px;
      left: 0;
      right: 0;
      z-index: 1;
      overflow: hidden;
      z-index: 2;
      .sub-classification-list {
        padding: 0 15px;
        background-color: #fff;
        z-index: 2;
        .sub-classification {
          position: relative;
          height: 45px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 12px;
          &::after {
            display: block;
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 1px;
            background-color: #ededed;
            transform: scaleY(.5);
          }
          .name {
            font-size: 12px;
            font-weight: 400;
            color: #999;
          }
          .icon-selected {
            width: 15px;
            height: 15px;
          }
        }
      }
    }
    .article-wrap {
      position: absolute;
      top: 86px;
      right: 0;
      left: 0;
      bottom: 0;
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

.fade-enter-active, .fade-leave-active {
  transition: all .3s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}

.slide-enter-active, .slide-leave-active {
  transition: all .3s;
}
.slide-enter, .slide-leave-to {
  transform: translate3d(0, -100%, 0);
}
</style>
