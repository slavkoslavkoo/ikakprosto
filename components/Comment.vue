<template>
  <div class="avatar">
    <div class="round"></div>
  </div>

  <div class="body">
    <h3 class="name">{{ comment.user.fullName }}</h3>
    <p class="content">{{ comment.body }}</p>

    <div class="footer">
      <span class="date">Today</span>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { Comment } from '~/util/types'

const { comment } = defineProps<{ comment: Comment }>()
</script>

<style></style>
