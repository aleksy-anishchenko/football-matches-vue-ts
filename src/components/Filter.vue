<template>
  <div>
    <select v-model="store.selectedCompetition">
      <option value="" disabled hidden>Выберите чемпионат</option>
      <option
          v-for="c in options"
          :key="c.id"
          :value="c.code"
      >
        {{ c.name }}
      </option>
    </select>
  </div>
</template>

<script setup lang="ts">
import type { FilterOptionList} from "@/types/types.ts";
import { useCompetitionStore } from "@/competitionStore.ts";

const store = useCompetitionStore()

const options: FilterOptionList = [
  { id: 1, name: "Лига чемпионов", code: "CL" },
  { id: 2, name: "Чемпионат Англии. Премьер-лига", code: "PL" },
  { id: 3, name: "Чемпионат Англии. Чемпионшип", code: "ELC" },
  { id: 4, name: "Чемпионат Испании. Ла лига", code: "PD" },
  { id: 5, name: "Чемпионат Италии. Серия А", code: "SA" },
  { id: 6, name: "Чемпионат Германии. Бундеслига 1", code: "BL1" },
  { id: 7, name: "Чемпионат Франции. Лига 1", code: "FL1" },
  { id: 8, name: "Чемпионат Нидерландов", code: "DED" },
  { id: 9, name: "Чемпионат Португалии", code: "PPL" },
  { id: 10, name: "Чемпионат Бразилии", code: "BSA" },
  { id: 11, name: "Кубок Либертадорес", code: "CLI" },
  { id: 12, name: "Чемпионат мира", code: "WC" },
  { id: 13, name: "Чемпионат Европы", code: "EC" }
];

</script>

<style scoped>

</style>