<template>
  <ul class="postList">
    <li class="postItem">
      <Post v-for="post in posts" :key="post.id" :post="post" />
    </li>
  </ul>
</template>

<script lang="ts" setup>
import Post from '../components/Post.vue'
import { usePostsStore } from '../store/posts'

const postStore = usePostsStore()

const posts = postStore.posts
</script>

<style lang="scss">
@use '~/assets/scss/main.scss';
</style>
