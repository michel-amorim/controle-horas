<template>
  <pre>{{ JSON.stringify(content, null, 2) }}</pre>
</template>

<script setup lang="ts">
defineProps<{ content: unknown }>();
</script>
