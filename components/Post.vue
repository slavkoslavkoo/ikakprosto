<template>
  <li class="post">
    <h1 class="postTitle">{{ post.title }}</h1>
    <p class="postBody">{{ post.body }}</p>
    <div class="bottom"></div>
  </li>
</template>

<script lang="ts" setup>
import type { Post } from '~/store/posts'

const props = defineProps<{
  post: Post
}>()
</script>

<style lang="scss">
@use '~/assets/scss/post.scss';
</style>
