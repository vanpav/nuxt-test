<template>
  <div>
    <div v-for="item in data" :key="item.id">
      {{ item.id }}: {{ item.title }}
    </div>
    {{ route.params.slug }}
  </div>
</template>

<script setup lang="ts">
  type Photo = { id: number; title: string; }
  
  const route = useRoute();

  const { data } = useFetch<Photo[]>(
    'https://jsonplaceholder.typicode.com/photos?_limit=20', 
    { key: 'photos' }
  );  

  console.log(import.meta.server ? 'Server load' : 'Client load', route.params.slug)
</script>