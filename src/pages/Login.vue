<template>
  <div class="login">
    <h2 class="login__title">Авторизация</h2>

    <form
        class="login__form"
        @submit.prevent="handleSubmit"
    >
      <label for="login-email">Почта</label>
      <InputText
          id="login-email"
          v-model="form.email"
      />

      <label for="login-password">Пароль</label>
      <InputText
          id="login-password"
          v-model="form.password"
      />

      <Button
          type="submit"
          label="Войти"
      />

      <Button
          type="button"
          label="Регистрация"
          variant="link"
          @click="handleButtonRegister"
      />
    </form>
  </div>
</template>

<script setup lang="ts">

import InputText from "primevue/inputtext";
import Button from "primevue/button";
import { reactive } from "vue";
import { useAuthStore} from "@/stores/authStore.ts";
const { handleLogin } = useAuthStore();
import { useRouter } from "vue-router";
const router = useRouter()

const form = reactive({
  email: "",
  password: ""
})

function handleSubmit() {
  handleLogin(form);
  router.push('/');
}

function handleButtonRegister(): void {
  router.push("/register");
}

</script>

<style scoped>
.login {
  display: flex;
  flex-direction: column;
  width: 220px;
  margin-bottom: 40px;
}

.login__title {
  margin-bottom: 10px;
}

.login__form {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
</style>