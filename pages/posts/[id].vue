<template>
  <Post :link-show="false" :post="post" />
  <CommentsList :comments="comments" />
</template>

<script lang="ts" setup>
import CommentsList from '~/components/CommentsList.vue'
import { usePostsStore } from '~/store/posts'
import { placeholderPost } from '~/util/placeholders'
import type { Comment } from '~/util/types'

const route = useRoute()
const postsStore = usePostsStore()

const post = postsStore.posts.find(post => post.id === +route.params.id) || placeholderPost

const { data } = await useFetch<{ comments: Comment[] }>(`https://dummyjson.com/posts/${route.params.id}/comments`)

const comments = data.value?.comments || []
</script>

<style></style>
