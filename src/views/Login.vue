<template>
  <div class="login">
    <form class="form" @submit.prevent="login"></form>
    <h1>Login</h1>
    <label for="username">Username</label>
    <input type="text" v-model="username" name="username" class="input" />
    <label for="password">Password</label>
    <input type="text" v-model="password" name="password" class="input" />
    <button class="btn">Login</button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRouter, useRoute } from 'vue-router';
const router=useRouter()
const route=useRoute()
const username=ref('')
const password=ref('')
const login=()=>{
  window.user=username.value
  const redirectPath=route.query.redirect || '/protected'
  router.push(redirectPath)
}
</script>

<style scoped>

</style>