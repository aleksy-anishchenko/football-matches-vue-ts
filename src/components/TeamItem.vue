<template>
  <div :class="['team__item', side === 'left' ? 'match__team--left' : 'match__team--right']">
    <template v-if="side === 'left'">
      <div>{{ team.name }}</div>
      <img :src="team.crest" width="30" height="30" alt="Логотип команды" />
    </template>
    <template v-else>
      <img :src="team.crest" width="30" height="30" alt="Логотип команды" />
      <div>{{ team.name }}</div>
    </template>
  </div>
</template>

<script setup lang="ts">
defineProps({
  team: Object,
  side: String,
})
</script>

<style scoped>
.team__item {
  flex: 1;
  display: flex;
  align-items: center;
  gap: 5px;
}

.match__team--left {
  justify-content: flex-end;
  text-align: right;
  padding-right: 12px;
}

.match__team--right {
  justify-content: flex-start;
  text-align: left;
  padding-left: 12px;
}
</style>