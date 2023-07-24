<template>
  <v-container>
    <v-card elevation="12" rounded="lg" class="pa-10 mt-5 text-center">
      <Steps :stepnumber="50" />
      <p>Preencha com os dados do responsável</p>
      <v-text-field
        label="CPF"
        v-model="userStore.cpf"
        variant="outlined"
        density="compact"
        class="mt-5"
        color="success"
        readonly
      ></v-text-field>
      <v-text-field
        label="Nome"
        v-model="userStore.name"
        variant="outlined"
        density="compact"
        color="success"
      ></v-text-field>
      <v-text-field
        label="E-mail"
        v-model="userStore.email"
        variant="outlined"
        density="compact"
        color="success"
      ></v-text-field>
      <v-text-field
        label="Celular"
        v-model="userStore.phone"
        variant="outlined"
        density="compact"
        color="success"
        v-maska:[cellphone]
      ></v-text-field>
      <v-row>
        <v-col cols="6">
          <v-btn
            variant="outlined"
            color="success"
            class="text-none"
            block
            link
            to="/"
          >
            Voltar
          </v-btn>
        </v-col>
        <v-col cols="6">
          <v-btn
            color="success"
            class="text-none"
            block
            @click="userStore.nextPageChild"
            >Próximo</v-btn
          >
        </v-col>
      </v-row>
    </v-card>
  </v-container>
</template>

<script setup>
import Steps from "../components/Steps.vue";
import { useUserDataStore } from "../stores/usersStore";
import { reactive } from "vue";

const userStore = useUserDataStore();

const cellphone = reactive({
  mask: "##-#####-####",
  eager: true,
});
</script>
