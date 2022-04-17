<template>
  <section class="h-16 flex items-center bg-gray-100 shadow">
    <div class="container flex items-center justify-between">
      <h1 class="text-2xl px-4">
        <NuxtLink to="/"> eMotion<span class="font-bold">Dev</span> </NuxtLink>
      </h1>

      <Search />
    </div>
  </section>
</template>

<script>
import Search from './Search.vue'

export default {
  components: { Search },
}
</script>
