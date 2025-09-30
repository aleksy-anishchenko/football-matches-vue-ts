<template>
  <div>
    <h1 class="title">Результаты матчей</h1>
    <Filters @filter-submit="handleSubmit" />
    <Competition />
    <MatchList />
  </div>
</template>

<script setup lang="ts">
import Filters from "@/components/Filter.vue";
import Competition from "@/components/Competition.vue";
import MatchList from "@/components/MatchList.vue";
import type { Filters as FiltersType } from "@/types/types";
import { useCompetitionData } from "@/useCompetitionData.ts";
const { fetchCompetitionData } = useCompetitionData()

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