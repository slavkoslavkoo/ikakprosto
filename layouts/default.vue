<template>
  <header class="header">
    <NuxtLink class="mainTitleLink" to="/">ikakprosto.ru</NuxtLink>
  </header>

  <main class="container">
    <NuxtPage />
  </main>
</template>

<script lang="ts" setup>
import { usePostsStore } from '~/store/posts'

const postStore = usePostsStore()
await callOnce(postStore.fetchPosts)
</script>

<style></style>
