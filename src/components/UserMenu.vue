<template>
  <div class="user-menu">
    <span>{{ user.email }}</span>
    <Button
      type="button"
      label="Выйти"
      severity="secondary"
      @click="handleLogout"
    />

  </div>
</template>

<script setup lang="ts">
import type { User } from "@/types/types";
import Button from "primevue/button";
import { useAuth } from "@/composables/useAuth.ts";
const { handleLogout } = useAuth();

defineProps<{
  user: User;
}>();

</script>

<style scoped>
.user-menu {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 12px;
}
</style>