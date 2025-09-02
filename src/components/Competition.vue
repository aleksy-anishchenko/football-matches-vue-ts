<template>
  <div v-if="store.competition" class="competition__header">
    <img src="https://crests.football-data.org/CL.png" width="75" height="75" alt="Логотип чемпионата" />
    <h2>{{ store.competition.name }}</h2>
  </div>
</template>

<script setup lang="ts">
import { useCompetitionStore } from "@/competitionStore.ts";
const store = useCompetitionStore()

</script>

<style>
.competition__header {
  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: 20px;
}
</style>