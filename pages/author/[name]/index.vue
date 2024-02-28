<template>
  <Navbar />
  <div>
    {{ params }}
  </div>
</template>
<script setup>
import author from "~/data/author.json";
const route = useRoute();
const params = route.params.name;

</script>
