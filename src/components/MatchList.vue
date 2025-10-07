<template>
  <div class="match-list">
    <div
        v-for="(matches, date) in store.matches"
        :key="date"
    >
      <h2 class="match-date">{{ date }}</h2>

      <div class="match-items">
        <MatchItem
            v-for="match in matches"
            :key="match.id"
            :match="match"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import MatchItem from "@/components/MatchItem.vue";
import { useCompetitionStore } from "@/competitionStore.ts";
const store = useCompetitionStore()

</script>

<style scoped>
.match-list {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.match-date {
  font-weight: bold;
  font-size: 27px;
}
</style>