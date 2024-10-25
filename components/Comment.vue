<template>
  <div class="avatar">
    <div class="round"></div>
  </div>

  <div class="body">
    <h3 class="name">{{ comment.user.fullName }}</h3>
    <p v-if="!isCommentDeleted" class="content">{{ comment.body }}</p>
    <div v-else class="deletedText">
      <p class="deleted">This comment has been deleted.</p>
      <button @click="handleReturn" class="return">Return</button>
    </div>

    <div v-if="!isCommentDeleted" class="footer">
      <span class="date">Today</span>
      <button @click="handleDelete" class="delete">Delete</button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { Comment } from '~/util/types'

const isCommentDeleted = ref(false)

const handleDelete = () => {
  isCommentDeleted.value = true
}

const handleReturn = () => {
  isCommentDeleted.value = false
}

const { comment } = defineProps<{ comment: Comment }>()
</script>

<style></style>
