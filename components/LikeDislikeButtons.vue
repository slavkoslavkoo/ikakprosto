<template>
  <button @click="toggleLikeClick" class="like" :class="{ 'liked': isLikeClicked }" name="like">
    <Icon name="mage:heart" mode="svg" size="1.6rem" />
    <span>Like</span>
    <span class="amount">{{ post.reactions.likes }}</span>
  </button>
  <button @click="toggleDislikeClick" name="dislike" class="dislike" :class="{ 'disliked': isDislikeClicked }">
    <Icon name="mage:thumbs-down" mode="svg" size="1.6rem" />
    <span>Trash</span>
    <span class="amount">{{ post.reactions.dislikes }}</span>
  </button>
</template>

<script lang="ts" setup>
import { usePostsStore, type Post } from '~/store/posts'

const postStore = usePostsStore()

const { post } = defineProps<{ post: Post }>()

const isLikeClicked = ref(false)
const isDislikeClicked = ref(false)

const toggleLikeClick = () => {
  if (!isLikeClicked.value) {
    isLikeClicked.value = true
    postStore.addLikePost(post.id)

    if (isDislikeClicked.value) {
      postStore.removeDislikePost(post.id)
      isDislikeClicked.value = false
    }
  } else {
    postStore.removeLikePost(post.id)
    isLikeClicked.value = false
  }
}

const toggleDislikeClick = () => {
  if (!isDislikeClicked.value) {
    isDislikeClicked.value = true
    postStore.addDislikePost(post.id)

    if (isLikeClicked.value) {
      postStore.removeLikePost(post.id)
      isLikeClicked.value = false
    }
  } else {
    isDislikeClicked.value = false
    postStore.removeDislikePost(post.id)
  }
}
</script>

<style></style>
