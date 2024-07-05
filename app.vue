<template>
  <div>    
    <NuxtRouteAnnouncer />
    <div>
      <NuxtLink to="/">Home</NuxtLink>
      |
      <NuxtLink :to="id">About</NuxtLink>
    </div>
    <NuxtPage />

    <div>
      Loaded from app.vue
      <br>
      {{ JSON.stringify(jokeStore.joke) }}
    </div>

    <button @click="jokeStore.fetchJoke">Refetch</button>
  </div>
</template>

<script setup lang="ts">
import { useJokesStore } from './stores/jokes.store';

  const jokeStore = useJokesStore();

  await useAsyncData('joke', async () => jokeStore.fetchJoke());

  const route = useRoute();
  const id = useState(() => getId())

  function getId() {
    return Math.random().toString(32).slice(2);
  }  

  watch(
    () => route.path,
    () => {
      id.value = getId()
    }
  )
</script>