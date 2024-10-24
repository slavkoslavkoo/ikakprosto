<template>
  <span>{{ tag }}</span>
</template>

<script lang="ts" setup>
const props = defineProps<{
  tag: string
}>()
</script>

<style lang="scss">
@use '/assets/scss/post.scss';
</style>
