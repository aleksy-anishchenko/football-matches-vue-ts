<template>
  <router-link :to="{ name: 'match', params: { id: match.id } }">
    <div class="match">
      <div class="match__meta">
        <div class="match__time">19:00</div>
        <div class="match__status">Завершен</div>
      </div>
      <TeamItem :team="match.homeTeam" :key="match.homeTeam.id" side="left"/>
      <MatchScore :score="match.score" />
      <TeamItem :team="match.awayTeam" :key="match.awayTeam.id" side="right"/>
    </div>
  </router-link>
</template>

<script setup lang="ts">
import TeamItem from "@/components/TeamItem.vue";
import MatchScore from "@/components/MatchScore.vue";

defineProps({
  match: Object,
})
</script>

<style scoped>
.match {
  display: flex;
  align-items: center;
  padding: 12px 0;
  border-bottom: 1px solid #ddd;
}

.match__meta {
  width: 90px;
  font-size: 14px;
  color: #333;
}

.match__status {
  font-size: 12px;
  color: #777;
}
</style>