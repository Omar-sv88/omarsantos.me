<template>
  <form class="relative" @submit.prevent="onSubmit">
    <input
      v-model="search"
      class="py-1 px-2 border-2 border-gray-300 hover:border-indigo-500 focus:outline-none focus:border-indigo-500 focus:ring focus:ring-indigo-300 transition-all"
      type="text"
      placeholder="Buscar..."
    />
  </form>
</template>

<script>
export default {
  data() {
    return {
      search: '',
    }
  },
  methods: {
    onSubmit() {
      this.$router.push({
        path: `/search/${this.search}`,
      })
    },
  },
}
</script>

<style scoped>
form:before {
  background: url('data:image/svg+xml;utf8,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%2216%22 height=%2216%22 viewBox=%220 0 24 24%22 fill=%22none%22 stroke=%22%2309f%22 stroke-width=%222%22 stroke-linecap=%22round%22 stroke-linejoin=%22round%22%3E%3Ccircle cx=%2211%22 cy=%2211%22 r=%228%22/%3E%3Cline x1=%2221%22 y1=%2221%22 x2=%2216.65%22 y2=%2216.65%22/%3E%3C/svg%3E')
    repeat;
  content: '';
  height: 1rem;
  left: 1rem;
  margin-top: -0.5rem;
  position: absolute;
  top: 50%;
  width: 1rem;
}

input {
  border-radius: 50px;
  padding-left: 2.5rem;
}
</style>
