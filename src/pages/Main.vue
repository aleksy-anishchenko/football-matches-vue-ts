<template>
  <UserMenu v-if="currentUser" :user="currentUser" />

  <h1 class="main__title">Результаты футбольных матчей</h1>

  <Filters @submit="handleSubmit" />

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
</template>

<script setup lang="ts">
import Filters from "@/components/Filter.vue";
import Competition from "@/components/Competition.vue";
import MatchList from "@/components/MatchList.vue";
import type { MatchSearchFilters as FiltersType } from "@/types/types";
import { useCompetitionStore } from "@/stores/competitionStore.ts";
import { useCompetitionData } from "@/composables/useCompetitionData.ts";
import { onMounted } from 'vue';
import { useAuthStore } from "@/stores/authStore.ts";
import UserMenu from "@/components/UserMenu.vue";

const { fetchCompetitionData } = useCompetitionData()
const store = useCompetitionStore()

function handleSubmit(filters: FiltersType) {
  fetchCompetitionData(filters);
}

const { currentUser, getUser } = useAuthStore();

onMounted(() => {
  getUser();
});

</script>

<style>
.main__title {
  text-align: center;
  margin-bottom: 20px;
}
</style>