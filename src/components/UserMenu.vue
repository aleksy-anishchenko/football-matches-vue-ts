<template>
  <div class="user-menu">
    <span>{{ user.email }}</span>
    <Button
      type="button"
      label="Выйти"
      severity="secondary"
      @click="logoutHandler"
    />

  </div>
</template>

<script setup lang="ts">
import type { User } from "@/types/types";
import Button from "primevue/button";
import { useAuthStore } from "@/stores/authStore.ts";
const { handleLogout } = useAuthStore();

import { useRouter } from "vue-router";
const router = useRouter()

function logoutHandler() {
  handleLogout();
  router.push('/login');
}

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