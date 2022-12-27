<template>
  <div>
  <section v-if="destination" class="destination">
   <h1>{{destination.name}}</h1>
   <GoBack />
    <div class="destination-details">
      <img :src="`/images/${destination.image}`" :alt="destination.name" />
      <p>{{destination.description}}</p>
    </div>  
  </section>
  <section v-if="destination" class="experiences">
    <h2>Top Experiences in {{destination.name}}</h2>
    <div class="cards">
      <RouterLink
      v-for="experience in destination.experiences"
      :key="experience.slug"
      :to="{name:'experience.show', params:{experienceSlug:experience.slug}}"
      >
      <experienceCard
      :experience="experience"
        />
      </RouterLink>
    </div>
    <RouterView />
  </section>
  </div>
</template>

<script setup lang="ts">
import {ref,computed} from 'vue'
import sourceData from '../data.json'
import ExperienceShow from './ExperienceShow.vue'
import {useRouter,useRoute} from 'vue-router'
import type{Destinations} from '../types/Destination'
import GoBack from '../components/GoBack.vue'
const props=defineProps<{
  id:number
}>()
const router=useRouter()
const route=useRoute()

const destination=computed(()=>{
  return sourceData.destinations.find(
    (destination)=>destination.id===props.id)
})
</script>

<style scoped>

</style>