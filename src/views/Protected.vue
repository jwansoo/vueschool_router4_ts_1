<template>
  <div>
    <h1>Greetings, {{username}}</h1>
    <button @click="logout">Logout</button>
    <RouterLink :to="{name:'invoices'}">
      <button>Invoices</button>
    </RouterLink>
  </div>
</template>
<script setup lang="ts">
import {ref} from 'vue'
import { useRouter } from 'vue-router';
const router=useRouter()
const username=ref(Window.user)
const logout=()=>{
  window.user=null
  router.push({name:'Home', query:{logout:null}})

}
</script>

<style scoped>

</style>