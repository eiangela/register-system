<template>
  <v-container>
    <v-card elevation="12" rounded="lg" class="pa-10 mt-5 text-center">
      <Steps />
      <p>
        Para que possamos identificar se você já possui um cadastro, preencher
        os campos abaixo:
      </p>
      <v-text-field
        label="CPF"
        v-model="userStore.cpf"
        variant="outlined"
        density="compact"
        class="mt-5"
        color="primary"
        @input="userStore.validateCpf"
        :rules="[userStore.cpfRule]"
      ></v-text-field>

      <v-select
        clearable
        label="Em qual filial você está?"
        v-model="userStore.filial"
        :items="['Aricanduva']"
        variant="outlined"
        class="border-1"
        density="compact"
        color="primary"
      ></v-select>

      <v-btn
        color="primary"
        block
        @click="userStore.nextPageParent"
        :disabled="!userStore.isFormValid"
        >Próximo</v-btn
      >
    </v-card>
  </v-container>
</template>

<script setup>
import Steps from "../components/Steps.vue";
import { useUserDataStore } from "../stores/usersStore";

const userStore = useUserDataStore();
</script>
