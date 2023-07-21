<template>
  <v-table>
    <thead>
      <tr>
        <th class="text-left">Nome</th>
        <th class="text-right pr-15">Data de Nascimento</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="child in userStore.childList" :key="child.uuid">
        <td class="text-left">{{ child.name }}
        </td>
        <td class="text-right pr-15">{{ child.birthday }}</td>
         <v-btn small color="error" @click="userStore.removeChild(child)">Remover</v-btn>
      </tr>
    </tbody>
  </v-table>
</template>

<script setup>
import { useUserDataStore } from "../stores/usersStore";

const userStore = useUserDataStore();
</script>