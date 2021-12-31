<script setup lang="ts">
const sampleText= ref<string>("hello nuxt3");
const samplelabel = "nuxt3";
</script>

<template>
  <div>
    <!-- Remove this component to get started! -->
    <!--    <NuxtWelcome />-->
    <q-input filled v-model="sampleText" />
    <q-btn :label="samplelabel" />
  </div>
</template>