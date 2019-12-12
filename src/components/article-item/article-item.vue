<template>
  <div class="article-item" @click="viewArticle">
    <img
      class="head-img"
      :src="article.headImg"
      alt="">
    <div class="content">
      <h2 class="title">{{article.title}}</h2>
      <div class="info">
        <div class="editor">
          <img
            :src="article.editor.avatar"
            alt=""
            class="avatar">
          <div class="name">{{article.editor.name}}</div>
        </div>
        <div class="like-wrap">
          <img
            :src="likeIcon"
            alt=""
            class="icon-like">
          <span class="like-num">{{article.likeNum}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'article-item',
  props: {
    article: {
      type: Object
    }
  },
  computed: {
    likeIcon() {
      return this.article.isLike
        ? require('../../common/image/community/icon-like-full.png')
        : require('../../common/image/community/icon-like-empty.png')
    }
  },
  methods: {
    viewArticle() {
      this.$router.push('/article-detail')
    }
  }
}
</script>

<style lang="scss" scoped>
.article-item {
  width: 168px;
  height: 230px;
  border-radius: 5px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  .head-img {
    width: 168px;
    height: 165px;
  }
  .content {
    padding: 0 10px;
    display: flex;
    height: 65px;
    flex-direction: column;
    box-sizing: border-box;
    .title {
      margin-top: 8px;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
      overflow: hidden;
      text-overflow: ellipsis;
      line-height: 14px;
      height: 26px;
      font-size: 11px;
      color: #333;
    }
    .info {
      margin-top: 8px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      .editor {
        display: flex;
        align-items: center;
        .avatar {
          width: 15px;
          height: 15px;
        }
        .name {
          margin-left: 4px;
          height: 15px;
          line-height: 15px;
          font-size: 10px;
          color: #333;
        }
      }
      .like-wrap {
        display: flex;
        align-items: center;
        .icon-like {
          width: 15px;
          height: 15px;
        }
        .like-num {
          margin-left: 4px;
          font-size: 13px;
          color: #999;
        }
      }
    }
  }
}
</style>
