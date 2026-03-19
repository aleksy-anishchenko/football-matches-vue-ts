<template>
  <div
      v-for="(matches, date) in store.matches"
      :key="date"
      class="match-list"
  >
    <h2 class="match-date">{{ formatReadableDate(date) }}</h2>

    <div class="match-items">
      <MatchItem
          v-for="match in matches"
          :key="match.id"
          :match="match"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import MatchItem from "@/components/MatchItem.vue";
import { useCompetitionStore } from "@/competitionStore.ts";
import { formatReadableDate } from "@/utils.ts";
const store = useCompetitionStore()

</script>

<style scoped>
.match-list {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.match-date {
  margin-bottom: 15px;
  font-weight: normal;
  font-size: 27px;
}

.match-items {
  margin-bottom: 25px;
}
</style>