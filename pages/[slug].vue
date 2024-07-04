<template>
  <div v-for="item in data" :key="item.id">
    {{ item.id }}: {{ item.title }}
  </div>
</template>

<script setup lang="ts">
  const { data } = useFetch<{id: number; title: string}[]>('https://jsonplaceholder.typicode.com/photos?_limit=20', {cache: 'force-cache'});

  console.log(import.meta.server ? 'Server load' : 'Client load')
</script>