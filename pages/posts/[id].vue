<template>
  <Post :post="post" />
  <!-- <Coments /> -->
</template>

<script lang="ts" setup>
import { usePostsStore } from '~/store/posts'
import { placeholderPost } from '~/util/placeholders'
import type { Comment } from '~/util/types'

const route = useRoute()
const postsStore = usePostsStore()

const post = postsStore.posts.find(post => post.id === +route.params.id) || placeholderPost

const { data } = await useFetch(`https://dummyjson.com/posts/${route.params.id}/comments`)
</script>

<style></style>
