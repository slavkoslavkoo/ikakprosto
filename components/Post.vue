<template>
  <li class="post">
    <h1 class="postTitle">{{ post.title }}</h1>

    <p class="postBody">{{ post.body }}</p>

    <div class="bottom">
      <div class="likeDislikeBtns">
        <button @click="toggleLikeClick" class="like" name="like">
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

      <NuxtLink :to="{ name: 'posts-id', params: { id: post.id } }" class="postLink">Open comments</NuxtLink>

      <span class="date">Today</span>

      <div class="tags">
        <div class="initialTag"></div>
        <Tag v-for="tag in post.tags" :text="tag" />
      </div>
    </div>
  </li>
</template>

<script lang="ts" setup>
import { usePostsStore, type Post } from '~/store/posts'
import Tag from './Tag.vue'
import { ref } from 'vue'

const postStore = usePostsStore()

const props = defineProps<{
  post: Post
}>()
const isLikeClicked = ref(false)
const isDislikeClicked = ref(false)

const toggleLikeClick = () => {
  if (!isLikeClicked.value) {
    isLikeClicked.value = true
    postStore.addLikePost(props.post.id)
  } else {
    isLikeClicked.value = false
    postStore.removeLikePost(props.post.id)
  }
}

console.log(props.post.reactions.likes)
</script>

<style lang="scss">
@use '~/assets/scss/post.scss';
</style>
