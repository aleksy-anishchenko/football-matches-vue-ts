<template>
  <div>
    <h1 class="title">Результаты футбольных матчей</h1>
    <Filters @filter-submit="handleSubmit" />

    <div v-if="!store.hasCompetition" class="empty-state">
      Выберите турнир и даты, чтобы увидеть матчи
    </div>

    <template v-else>
      <Competition />

      <MatchList v-if="store.hasMatches" />

      <div v-else class="empty-state">
        Нет матчей на выбранную дату
      </div>
    </template>
  </div>
</template>

<script setup lang="ts">
import Filters from "@/components/Filter.vue";
import Competition from "@/components/Competition.vue";
import MatchList from "@/components/MatchList.vue";
import type { MatchSearchFilters as FiltersType } from "@/types/types";
import { useCompetitionStore } from "@/competitionStore.ts";
import { useCompetitionData } from "@/useCompetitionData.ts";

const { fetchCompetitionData } = useCompetitionData()
const store = useCompetitionStore()

function handleSubmit(filters: FiltersType) {
  fetchCompetitionData(filters);
}


</script>

<style>
.title {
  text-align: center;
  margin-bottom: 20px;
}
</style>