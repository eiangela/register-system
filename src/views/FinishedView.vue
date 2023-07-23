<template>
  <v-sheet
    elevation="12"
    max-width="600"
    rounded="lg"
    width="100%"
    class="pa-10 mt-10 text-center mx-auto"
  >
    <v-icon
      class="mb-5"
      color="success"
      icon="mdi-check-circle"
      size="112"
    ></v-icon>

    <h2 class="text-h5 mb-6">Cadastro realizado com sucesso!</h2>

    <p class="mb-4 text-medium-emphasis text-body-2">Obrigado!</p>

    <v-divider class="mb-4"></v-divider>

    <div class="text-end">
      <v-btn
        class="text-none"
        color="success"
        variant="flat"
        width="150"
        @click="userStore.newRegister"
      >
        Novo Cadastro
      </v-btn>
    </div>
  </v-sheet>
</template>

<script setup>
import { useUserDataStore } from "../stores/usersStore";

const userStore = useUserDataStore();


</script>
