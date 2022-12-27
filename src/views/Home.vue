<template>
  <div class="home">
    <h1>Home</h1>
    <h1>All Destinations</h1>
    <button @click="triggerRouterError">Trigger Route Error</button>
    <div class="destinations">
      <RouterLink
        v-for="destination in destinations"
        :key="destination.id"
        :to="{name:'destination.show',params:{id:destination.id, slug:destination.slug}}"
      >
      <h2>{{destination.name}}</h2>
      <img :src="`/images/${destination.image}`" :alt="destination.name" />
    </RouterLink>
    </div>
  </div>
</template>

<script setup lang="ts">
import { isNavigationFailure, NavigationFailureType } from "vue-router";
import sourceData from "@/data.json";
import { useRouter } from "vue-router";
import {ref} from 'vue'
import { isSimpleIdentifier } from "@vue/compiler-core";
const router=useRouter()
const destinations=ref(sourceData.destinations)
// const addDynamicRoute=()=>({
  //  router.addRoutes({
    // name:'dynamic',
    // path:'/dynamic',
    // component:()=>import('../views/Login.vue')
  // })
  // router.removeRoute('dynamic')
// })
const triggerRouterError=async()=>{
  const navigationFailure=await router.push('/')
  if(isNavigationFailure(navigationFailure,NavigationFailureType.duplicated)){
    console.log(navigationFailure.to)
    console.log(navigationFailure.from)
 }else{
 // all is well
 }
}
</script>

<style scoped>

</style>