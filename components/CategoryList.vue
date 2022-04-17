<template>
  <section>
    <header class="mb-4">
      <h2 class="font-semibold">Categorías</h2>
    </header>
    <div class="content">
      <ul class="flex items-center gap-4 flex-wrap">
        <li
          v-for="(category, index) in categories"
          :key="index"
          class="border-2 border-gray-300 hover:shadow hover:border-indigo-500 transition-all"
        >
          <NuxtLink
            :to="`/category/${category.path}`"
            class="py-2 px-4 flex items-center justify-center gap-2 font-semibold text-xl"
          >
            <img
              class="logo"
              :src="require(`~/assets/logos/${category.image}`)"
              :alt="category.name"
            />
            {{ category.name }}
          </NuxtLink>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
const categoryList = [
  {
    name: 'Html',
    path: 'html',
    image: 'html.png',
  },
  {
    name: 'Css',
    path: 'css',
    image: 'css.png',
  },
  {
    name: 'JavaScript',
    path: 'javascript',
    image: 'js.png',
  },
]

export default {
  data() {
    return {
      categories: [],
    }
  },
  mounted() {
    this.categories = categoryList
  },
}
</script>

<style scoped>
.logo {
  width: auto;
  height: 28px;
}

li {
  min-width: 100px;
  border-radius: 50px;
}
</style>
