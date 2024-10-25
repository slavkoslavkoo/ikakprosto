<template>
  <span class="tag">{{ text }}</span>
</template>

<script lang="ts" setup>
const props = defineProps<{
  text: string
}>()
</script>

<style lang="scss">
@use '/assets/scss/post.scss';
</style>
