<template>
  <div class="match-list">
    <MatchItem v-for="match in store.matches" :key="match.id" :match="match" />
  </div>
</template>

<script setup lang="ts">
import MatchItem from "@/components/MatchItem.vue";
import { useCompetitionStore } from "@/competitionStore.ts";
const store = useCompetitionStore()

</script>

<style scoped>
.match-list {
  max-width: 700px;
  margin: 0 auto;
}
</style>