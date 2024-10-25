<template>
  <ul class="postList">
    <Post v-for="post in posts" :key="post.id" :post="post" />
  </ul>
</template>

<script lang="ts" setup>
import Post from '../components/Post.vue'
import { usePostsStore } from '../store/posts'

const postStore = usePostsStore()
await callOnce(postStore.fetchPosts)

const posts = postStore.posts
</script>

<style lang="scss">
@use '~/assets/scss/main.scss';
</style>
