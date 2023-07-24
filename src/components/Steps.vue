<template>
  <v-container>
    <v-row align="center" style="position: relative">
      <v-progress-linear
        class="progress-bar"
        color="success"
        :model-value="step"
        :height="5"
      ></v-progress-linear>
      <v-col cols="4">
        <div class="text-center">Verificação Inicial</div>
        <div class="pa-2 bg-success rounded-circle d-inline-block"></div>
      </v-col>
      <v-col cols="4">
        <div class="text-center">Cadastro De Responsável</div>
        <div class="pa-2 bg-success rounded-circle d-inline-block"></div>
      </v-col>
      <v-col cols="4">
        <div class="text-center">Cadastro De Crianças</div>
        <div class="pa-2 bg-success rounded-circle d-inline-block"></div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { ref } from "vue";
const props = defineProps({
  stepnumber: {
    type: Number,
    default: 0,
  },
});
const step = ref(props.stepnumber);
</script>
<style>
.progress-bar {
  position: absolute;
  width: 67%;
  top: 43px !important;
}
</style>
