<template>
  <li class="post">
    <h1 class="postTitle">{{ post.title }}</h1>
    <p class="postBody">{{ post.body }}</p>
    <div class="bottom">
      <div class="likeDislikeBtns">
        <button class="like" name="like">
          <Icon name="mage:heart" mode="svg" size="1.6rem" />
          <span>Like</span>
          <span class="amount">{{ post.reactions.likes }}</span>
        </button>
        <button name="dislike" class="dislike">
          <Icon name="mage:thumbs-down" mode="svg" size="1.6rem" />
          <span>Trash</span>
          <span class="amount">{{ post.reactions.dislikes }}</span>
        </button>
      </div>
      <NuxtLink class="postLink" :to="{ name: 'posts-id', params: { id: post.id } }">Open comments</NuxtLink>
      <span class="date">Today</span>
    </div>
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
