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
      <br />
      {{ JSON.stringify(data) }}
    </div>
  </div>
</template>

<script setup lang="ts">
  const route = useRoute();
  const id = ref(getId())

  const { data } = useFetch<{id: number; title: string}[]>('https://jsonplaceholder.typicode.com/photos?_limit=1');

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