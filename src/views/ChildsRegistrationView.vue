<template>
  <v-container>
    <v-card elevation="12" rounded="lg" class="pa-10 mt-5 text-center">
      <Steps :stepnumber="100" />
      <p>Adicione quem irá brincar</p>
      <v-row>
        <v-col cols="5">
          <v-text-field
            label="Nome"
            v-model="userStore.childName"
            variant="outlined"
            density="compact"
            class="mt-5"
            color="success"
          ></v-text-field>
        </v-col>
        <v-col cols="5">
          <v-text-field
            label="Data de Nascimento"
            v-model="userStore.childBirthday"
            variant="outlined"
            density="compact"
            class="mt-5"
            color="success"
            v-maska:[dateBday]
          ></v-text-field>
        </v-col>
        <v-col cols="2">
          <v-btn
            color="success"
            height="43px"
            block
            class="mt-5 text-none"
            @click="userStore.addChild"
            >Adicionar</v-btn
          >
        </v-col>
      </v-row>
      <v-divider class="border-opacity-50"></v-divider>
      <Table :children="userStore.childList" />

      <v-row class="mt-5">
        <v-col cols="6">
          <v-btn
            variant="outlined"
            color="success"
            class="text-none"
            block
            link
            to="/parent"
            >Voltar</v-btn
          >
        </v-col>

        <v-col cols="6">
          <v-btn
            color="success"
            class="text-none"
            block
            @click="userStore.nextFinished"
            >Cadastrar</v-btn
          >
        </v-col>
      </v-row>
    </v-card>
  </v-container>
</template>

<script setup>
import Steps from "@/components/Steps.vue";
import Table from "@/components/Table.vue";
import { reactive } from "vue";

import { useUserDataStore } from "../stores/usersStore";

const userStore = useUserDataStore();

const dateBday = reactive({
  mask: "##/##/####",
  eager: true,
});
</script>
