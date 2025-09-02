<template>
  <div>
    <h1 class="title">Результаты матчей</h1>
    <Competition />
    <MatchList />
  </div>
</template>

<script setup lang="ts">
import Competition from "@/components/Competition.vue";
import MatchList from "@/components/MatchList.vue";

</script>

<style>
.title {
  text-align: center;
  margin-bottom: 20px;
}
</style>