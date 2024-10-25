<template>
  <div class="post">
    <h1 class="postTitle">{{ post.title }}</h1>

    <p class="postBody">{{ post.body }}</p>

    <div class="bottom">
      <div class="likeDislikeBtns">
        <LikeDislikeButtons :post="post" />
      </div>

      <NuxtLink v-if="linkShow" :to="{ name: 'posts-id', params: { id: post.id } }" class="postLink"
        >Open comments</NuxtLink
      >

      <span class="date">Today</span>

      <div class="tags">
        <div class="initialTag"></div>
        <Tag v-for="tag in post.tags" :text="tag" />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import Tag from './Tag.vue'
import type { Post } from '~/util/types'

const props = defineProps<{ post: Post; linkShow: boolean }>()
</script>

<style lang="scss">
@use '~/assets/scss/post.scss';
</style>
