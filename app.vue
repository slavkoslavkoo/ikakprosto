<template>
  <main class="container">
    <ul class="postList">
      <Post v-for="post in posts" :key="post.id" :post="post" />
    </ul>
  </main>
</template>

<script setup lang="ts">
import Post from './components/Post.vue'
import { usePostsStore } from './store/posts'

const postStore = usePostsStore()
await callOnce(postStore.fetchPosts)

const posts = postStore.posts
</script>

<style lang="scss">
@use '~/assets/scss/main.scss';
</style>
