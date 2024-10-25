<template>
  <section class="comments">
    <h2 class="commentsTitle">{{ comments.length }} comments</h2>
    <ul class="list">
      <li v-for="comment in comments" class="comment">
        <Comment :key="comment.id" :comment="comment" />
      </li>
    </ul>
  </section>
</template>

<script lang="ts" setup>
import type { Comment } from '~/util/types'

const { comments } = defineProps<{ comments: Comment[] }>()
</script>

<style lang="scss">
@use '/assets/scss/comments.scss';
</style>
