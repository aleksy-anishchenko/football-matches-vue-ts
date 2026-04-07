<template>
  <form class="filter-container" @submit.prevent="submitFilters">
    <div class="filter-select">
      <Select
          v-model="filters.competition"
          :options="competitionOptions"
          optionLabel="name"
          optionValue="code"
          placeholder="Выберите турнир"
          :invalid="!filters.competition && triedSubmit"
          :fluid="true"

      />

    </div>

    <DatePicker
        v-model="dateRange"
        updateModelType="date"
        locale="ru"
        selectionMode="range"
        :manualInput="false"
        placeholder="Выберите даты"
        :invalid="isDateRangeInvalid && triedSubmit"
    />

    <Button
        type="submit"
        label="Показать матчи"
    />
  </form>
</template>

<script setup lang="ts">
import { reactive, ref, computed } from "vue"
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

const isDateRangeInvalid = computed(() => {
  return !dateRange.value || !dateRange.value[0] || !dateRange.value[1]
})

const emit = defineEmits<{
  (eventName: "submit", payload: MatchSearchFilters): void
}>();

const competitionOptions: FilterOptionList = [
  { id: 1, name: "Лига чемпионов", code: "CL" },
  { id: 2, name: "Англия. Премьер-лига", code: "PL" },
  { id: 3, name: "Англия. Чемпионшип", code: "ELC" },
  { id: 4, name: "Испания. Ла лига", code: "PD" },
  { id: 5, name: "Италия. Серия А", code: "SA" },
  { id: 6, name: "Германия. Бундеслига 1", code: "BL1" },
  { id: 7, name: "Франция. Лига 1", code: "FL1" },
  { id: 8, name: "Нидерландов", code: "DED" },
  { id: 9, name: "Португалия", code: "PPL" },
  { id: 10, name: "Чемпионат Бразилии", code: "BSA" },
  { id: 11, name: "Кубок Либертадорес", code: "CLI" },
  { id: 12, name: "Чемпионат мира", code: "WC" },
  { id: 13, name: "Чемпионат Европы", code: "EC" }
];

  function submitFilters() {
    triedSubmit.value = true;

    if (!filters.competition) return;

    const [from, to] = dateRange.value ?? [];

    if (!from || !to) return;

    filters.dateFrom = from;
    filters.dateTo = to;

    emit("submit", filters);
  }

</script>

<style scoped>
.filter-container {
  display: flex;
  gap: 15px;
  margin-bottom: 20px;
}
.filter-select {
  width: 240px;
}
</style>