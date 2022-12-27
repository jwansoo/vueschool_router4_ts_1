<template>
  <div id="nav">
    <RouterLink id='logo' to="/">Vue School Travel App</RouterLink> |
    <RouterLink 
    v-for="destination in destinations"
    :key="destination.id"
    :to="{name:'destination.show', params:{id:destination.id, slug:destination.slug}}"
    >{{destination.name}}</RouterLink>
    <router-link :to="{name:'protected'}">Dashboard</router-link>
  </div>
</template>
<script setup lang="ts">
import type { Destinations } from '@/types/Destination';
import {ref} from 'vue'
import sourceData from '../data.json'
const destinations=ref(sourceData.destinations)
</script>