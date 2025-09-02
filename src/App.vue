<template>
  <div class="container">
    <router-view></router-view>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import { useCompetitionData } from '@/useCompetitionData';

const { fetchCompetitionData } = useCompetitionData();

onMounted(() => {
  fetchCompetitionData();
});
</script>

<style>
</style>