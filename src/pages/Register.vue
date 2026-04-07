<template>
  <div class="register">
    <h2 class="register__title">Регистрация</h2>

    <form
        class="register__form"
        @submit.prevent="handleSubmit"
    >
      <label for="register-email">Почта</label>
      <InputText
          id="register-email"
          v-model="form.email"
      />

      <label for="register-password">Пароль</label>
      <InputText
          id="register-password"
          v-model="form.password"
      />

      <Button
          type="submit"
          label="Создать аккаунт"
      />
    </form>
  </div>
</template>

<script setup lang="ts">
import Button from "primevue/button";
import InputText from "primevue/inputtext";
import { reactive } from "vue";

import { useAuthStore} from "@/stores/authStore.ts";
const { handleRegister } = useAuthStore();

import { useRouter } from "vue-router";
const router = useRouter()

const form = reactive({
  email: "",
  password: ""
})

function handleSubmit() {
  handleRegister(form);
  router.push('/');
}

</script>

<style scoped>
.register {
  display: flex;
  flex-direction: column;
  width: 220px;
  margin-bottom: 40px;
}

.register__title {
  margin-bottom: 10px;
}

.register__form {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
</style>