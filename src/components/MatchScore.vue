<template>
  <div v-if="score" class="score">
    {{ score.fullTime.home }} - {{ score.fullTime.away }}
  </div>
</template>

<script setup lang="ts">
import type { TScore } from "@/types/types.ts";

defineProps<{ score?: TScore }>()
</script>

<style scoped>
.score {
  width: 80px;
  text-align: center;
  padding: 4px 8px;
  font-weight: bold;
  background: #f0f0f0;
  border-radius: 8px;
}
</style>