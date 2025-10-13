<template>
  <form class="filter-container" @submit.prevent="submitFilters">
    <Select
        v-model="filters.competition"
        :options="competitionOptions"
        optionLabel="name"
        optionValue="code"
        placeholder="Выберите турнир"
        :invalid="!filters.competition && triedSubmit"
    />

    <DatePicker
        v-model="dateRange"
        locale="ru"
        selectionMode="range"
        :manualInput="false"
        placeholder="Выберите даты матчей"
    />

    <Button
        type="submit"
        label="Показать матчи"
        severity="secondary"
    />
  </form>
</template>

<script setup lang="ts">
import { reactive, ref } from "vue"
import Select from 'primevue/select';
import DatePicker from 'primevue/datepicker';
import Button from 'primevue/button';
import type { MatchSearchFilters, FilterOptionList } from "@/types/types.ts";

const filters = reactive<MatchSearchFilters>({
  competition: "",
  dateFrom: null,
  dateTo: null,
});

const dateRange = ref<[Date | null, Date | null] | null>(null);
const triedSubmit = ref(false);

const emit = defineEmits<{
  (eventName: "filter-submit", payload: MatchSearchFilters): void
}>();

const competitionOptions: FilterOptionList = [
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

  function submitFilters() {
    triedSubmit.value = true;

    if (!filters.competition) {
      return;
    }

    if (dateRange.value) {
      const [from, to] = dateRange.value;
      filters.dateFrom = from;
      filters.dateTo = to;
    } else {
      filters.dateFrom = null;
      filters.dateTo = null;
    }
    emit("filter-submit", filters);
  }

</script>

<style scoped>
.filter-container {
  display: flex;
  gap: 15px;
  margin-bottom: 20px;
}
</style>