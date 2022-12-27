<template>
  <div class="card">
    <img :src="`/images/${experience.image}`" alt="experience.name" />
    <span class="card_text">{{experience.name}}</span>
  </div>
</template>

<script setup lang="ts">
import type { Destinations } from '@/types/Destination';
const props=defineProps<{
  experience:Destinations
}>()
</script>

<style scoped>

</style>