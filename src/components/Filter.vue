<template>
  <div>
    <select v-model="filters.competition">
      <option value="" disabled hidden>Выберите чемпионат</option>
      <option
          v-for="c in competitionOptions"
          :key="c.id"
          :value="c.code"
      >
        {{ c.name }}
      </option>
    </select>

    <input
        type="text"
        v-model="dateFormatted"
        placeholder="Выберите дату"
        readonly
        @focus="open = true"
    />

    <div v-if="open" class="calendar-popup">
      <v-date-picker
          v-model="filters.date"
          @update:model-value="handleSelect"
      />
    </div>

    <button @click="submitFilters">Получить матчи</button>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref, computed } from "vue";
import { formatDate } from "@/utils.ts";
import type { Filters, FilterOptionList } from "@/types/types.ts";

const filters = reactive<Filters>({
  competition: "",
  date: null,
});

const open = ref(false)

const dateFormatted = computed({
  get: () => (filters.date ? formatDate(filters.date) : ""),
  set: () => {}
})

function handleSelect() {
  open.value = false
}

const emit = defineEmits<{
  (eventName: "filter-submit", payload: Filters): void
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
    emit("filter-submit", filters);
  }

</script>

<style scoped>
.calendar-popup {
  position: absolute;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.5);
}
</style>