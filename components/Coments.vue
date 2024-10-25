<template>
  <div>
    <p v-for="comment in comments">{{ comment }}</p>
  </div>
</template>

<script lang="ts" setup>
const { comments } = defineProps<{ comments: Comment[] }>()
</script>

<style></style>
