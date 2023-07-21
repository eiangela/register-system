<template>
  <v-container>
    <v-card elevation="12" rounded="lg" class="pa-10 mt-5 text-center">
      <Steps />
      <p>Preencha com os dados do responsável</p>
      <v-text-field
        label="CPF"
        v-model="userStore.cpf"
        variant="outlined"
        density="compact"
        class="mt-5"
        color="primary"
      ></v-text-field>
      <v-text-field
        label="Nome"
        v-model="userStore.name"
        variant="outlined"
        density="compact"
        color="primary"
      ></v-text-field>
      <v-text-field
        label="E-mail"
        v-model="userStore.email"
        variant="outlined"
        density="compact"
        color="primary"
      ></v-text-field>
      <v-text-field
        label="Celular"
        v-model="userStore.phone"
        variant="outlined"
        density="compact"
        color="primary"
      ></v-text-field>
      <v-row>
        <v-col cols="6">
          <v-btn variant="outlined" color="primary" block link to="/">
            Voltar
          </v-btn>
        </v-col>
        <v-col cols="6">
          <v-btn color="primary" block @click="userStore.nextPageChild">Próximo</v-btn>
        </v-col>
      </v-row>
    </v-card>
  </v-container>
</template>

<script setup>
import Steps from '../components/Steps.vue'
import { useUserDataStore } from "../stores/usersStore";

const userStore = useUserDataStore();




/*
const cpf = ref("");
const name = ref("");
const email = ref("");
const phone = ref("");
const router = useRouter();

const fetchResponsibleData = () => {
  // Aqui você pode substituir pela lógica para buscar os dados do responsável com base no CPF
  // Neste exemplo, estou utilizando uma simulação estática com os dados fornecidos
  const responsibleData = [
    {
      id: "2",
      cpf: "32730541829",
      phone: "994545726",
      phone_ddd: "11",
      email: "daniel.scapulatempo@playcenter.com.br",
      name: "Daniel Tadeu Scapulatempo",
    },
  ];

  const foundResponsible = responsibleData.find((responsible) => responsible.cpf === cpf.value);
  if (foundResponsible) {
    name.value = foundResponsible.name;
    email.value = foundResponsible.email;
    phone.value = foundResponsible.phone;
  } else {
    name.value = "";
    email.value = "";
    phone.value = "";
  }
};

const proximo = () => {
  if (cpf.value.trim() === "" || name.value.trim() === "" || email.value.trim() === "" || phone.value.trim() === "") {
    alert("Preencha todos os campos");
  } else {
    // Navegar para a próxima página
    router.push("/childs");
  }
};

onMounted(() => {
  // Obter o CPF da URL
  const routeParams = router.currentRoute.value.query;
  if (routeParams && routeParams.cpf) {
    cpf.value = routeParams.cpf;
    // Buscar os dados do responsável com base no CPF
    fetchResponsibleData();
  }
}); */
</script>