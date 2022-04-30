<template>
  <section class="category-list mt-12">
    <header class="mb-12">
      <h2 class="font-semibold text-3xl">🏷 Categorías</h2>
    </header>
    <div class="content">
      <ul>
        <li
          v-for="(category, index) in categories"
          :key="index"
          class="group block w-full my-2 rounded border border-gray-100 shadow hover:shadow-md transition-shadow"
        >
          <NuxtLink
            :to="`/category/${category.path}`"
            class="py-2 px-4 flex items-center gap-2 font-semibold text-xl group-hover:text-indigo-500 transition-color"
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
.category-list {
  width: 100%;
}

@media (min-width: 1024px) {
  .category-list {
    max-width: 250px;
  }
}

.logo {
  width: auto;
  height: 28px;
}
</style>
