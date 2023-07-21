<template>
  <v-container>
    <v-card elevation="12" rounded="lg" class="pa-10 mt-5 text-center">
      <Steps />
      <p>Adicione quem irá brincar</p>
      <v-row>
        <v-col cols="5">
          <v-text-field
            label="Nome"
            v-model="userStore.childName"
            variant="outlined"
            density="compact"
            class="mt-5"
            color="primary"
          ></v-text-field>
        </v-col>
        <v-col cols="5">
          <v-text-field
            label="Data de Nascimento"
            v-model="userStore.childBirthday"
            variant="outlined"
            density="compact"
            class="mt-5"
            color="primary"
          ></v-text-field>
        </v-col>
        <v-col cols="2">
          <v-btn color="primary" height="43px" block class="mt-5" @click="userStore.addChild">Adicionar</v-btn>
        </v-col>
      </v-row>
      <v-divider class="border-opacity-50"></v-divider>
      <Table :criancas="userStore.childList" />

      <v-row class="mt-5">
        <v-col cols="6">
          <v-btn variant="outlined" color="primary" block link to="/parent">Voltar</v-btn>
        </v-col>

        <v-col cols="6">
          <v-btn color="primary" block>Cadastrar</v-btn>
        </v-col>
      </v-row>
    </v-card>
  </v-container>
</template>

<script setup>
import Steps from "@/components/Steps.vue";
import Table from "@/components/Table.vue";

import { useUserDataStore } from "../stores/usersStore";

const userStore = useUserDataStore();

/*onMounted(() => {
  // Obter o ID do responsável da URL
  const routeParams = router.currentRoute.value.query;
  if (routeParams && routeParams.responsibleId) {
    // Buscar as crianças cadastradas associadas ao responsável
    criancas.value = responsiblesChildren(routeParams.responsibleId);
  }
});

const adicionarCrianca = () => {
  if (nomeCrianca.value.trim() === '' || dataNascimento.value.trim() === '') {
    alert('Preencha todos os campos');
    return;
  }

  const novaCrianca = {
    uuid: generateUUID(),
    id: '',
    responsible: router.currentRoute.value.query.responsibleId,
    name: nomeCrianca.value,
    birthday: dataNascimento.value,
  };

  criancas.value.push(novaCrianca);

  // Limpar os campos após adicionar a criança
  nomeCrianca.value = '';
  dataNascimento.value = '';
};

// Função para obter as crianças associadas ao responsável com base no ID do responsável
const responsiblesChildren = (responsibleId) => {
  return criancas.value.filter((child) => child.responsible === responsibleId.toString());
}; */
</script>