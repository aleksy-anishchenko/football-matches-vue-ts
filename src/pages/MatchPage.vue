<template>
  <div>
    <router-link :to="{ name: 'main' }">На главную</router-link>
    <h1>Результат матча</h1>
    <div v-if="currentMatch" class="match-card">
      <h2>{{ currentMatch.homeTeam.name }} - {{ currentMatch.awayTeam.name }}</h2>
      <p>Счёт: {{ currentMatch.score.fullTime.home }} : {{ currentMatch.score.fullTime.away }}</p>
      <p>Дата: {{ currentMatch.utcDate }}</p>
    </div>
    <div v-else>Загрузка матча...</div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import { useCompetitionData } from '@/useCompetitionData.ts';

const props = defineProps<{ id: number }>();

const { currentMatch, fetchMatchById } = useCompetitionData();

onMounted(() => {
  fetchMatchById(Number(props.id));
});

</script>
console.log(currentMatch);
<style>
.match-card {
  background: url("@/img/matchimage.jpg");
  border-radius: 12px;
  padding: 12px;
  max-width: 600px;
  color: #FFFFFF;
}
</style>