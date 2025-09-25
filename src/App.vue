<template>
  <div class="container">
    <router-view></router-view>
  </div>
</template>

<script setup lang="ts">
import { watch } from "vue";
import { useCompetitionStore } from '@/competitionStore';
import { useCompetitionData } from '@/useCompetitionData';

const store = useCompetitionStore();
const { fetchCompetitionData } = useCompetitionData()

watch(
    () => store.selectedCompetition,
    (newCode) => {
      if (newCode) {
        fetchCompetitionData(newCode)
      }
    }
)

</script>

<style>
</style>