<template>
  <section v-if="experience">
    <h1>{{experience.name}}</h1>
    <img :src="`/images/${experience.image}`" :alt="experience.name" />
    <p>{{experience.description}}</p>
  </section>
</template>

<script setup lang="ts">
import sourceData from '../data.json'
import {ref,computed} from 'vue'
import type { Destinations } from '@/types/Destination';
const props=defineProps<{
  id:number,
  experienceSlug:string
}>()
const destination=computed(()=>{
  return sourceData.destinations.find(destination=>destination.id=props.id)
})
const experience=computed(()=>{
   return destination.value.experiences.find(experience=>experience.slug===props.experienceSlug)
 
})
</script>

<style scoped>

</style>