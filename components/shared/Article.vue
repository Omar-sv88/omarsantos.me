<template>
  <section
    class="border border-gray-200 rounded shadow hover:shadow-lg transition-all cursor-pointer"
    @click="goToArticle"
  >
    <header class="relative">
      <img
        class="rounded-t"
        :src="require(`~/assets/images/${article.image}`)"
        :alt="article.title"
      />
      <h3
        class="absolute block p-2 bg-gray-100 text-indigo-700 font-semibold rounded shadow-lg"
      >
        <NuxtLink :to="`/blog/${article.slug}`">
          {{ article.title }}
        </NuxtLink>
      </h3>
    </header>
    <div class="content p-4">
      <header class="flex items-center justify-between mb-2">
        <p class="text-sm text-gray-500">
          {{ getParsedDate(article.createdAt) }}
        </p>
        <p class="bg-indigo-700 text-white badge text-sm">
          {{ article.category }}
        </p>
      </header>
      <p>{{ article.extract }}</p>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    article: {
      type: Object,
      required: true,
    },
  },
  methods: {
    goToArticle() {
      this.$router.push(`/blog/${this.article.slug}`)
    },
    getParsedDate(entryDate) {
      const date = new Date(entryDate)
      return date.toLocaleDateString('es-ES')
    },
  },
}
</script>

<style scoped>
section {
  opacity: 0.9;
}

section:hover {
  opacity: 1;
}

section header h3 {
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.badge {
  border-radius: 50px;
  padding: 0.25rem 1rem;
  min-width: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
