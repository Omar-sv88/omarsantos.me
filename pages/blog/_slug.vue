<template>
  <Wrapper>
    <template #content-sidebar>
      <section class="mt-12">
        <header class="mb-6">
          <img
            class="w-auto max-h-80 mb-6 mx-auto"
            :src="require(`~/assets/images/${article.image}`)"
            :alt="article.title"
          />
          <h1 class="text-3xl font-bold">{{ article.title }}</h1>
        </header>
        <nuxt-content :document="article" />
      </section>
      <CategoryList />
    </template>
    <template #footer>
      <Footer />
    </template>
  </Wrapper>
</template>

<script>
import Wrapper from '~/components/layout/Wrapper.vue'
import Footer from '~/components/layout/Footer.vue'
import CategoryList from '~/components/shared/CategoryList.vue'

export default {
  components: { Wrapper, Footer, CategoryList },
  async asyncData({ params, $content }) {
    const article = await $content(undefined, {
      deep: true,
    })
      .where({ slug: params.slug })
      .limit(1)
      .fetch()
    return article.length > 0
      ? { article: article[0], error: '', code: 200 }
      : { article: {}, error: 'Page not found', code: 404 }
  },
  head() {
    return {
      title: `${this.article.title} - Omar Santos`,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.article.description,
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: this.article.title,
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: this.article.description,
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: require(`~/assets/images/${this.article.image}`),
        },
      ],
    }
  },
  mounted() {
    if (this.code === 404) this.$router.push('/')
  },
}
</script>

<style>
.nuxt-content h1,
.nuxt-content h2,
.nuxt-content h3,
.nuxt-content h4,
.nuxt-content h5,
.nuxt-content h6 {
  @apply font-bold;
}

.nuxt-content h2,
.nuxt-content h3,
.nuxt-content h4,
.nuxt-content h5,
.nuxt-content h6 {
  @apply mb-2;
}

.nuxt-content h1 {
  @apply text-3xl;
}
.nuxt-content h2 {
  @apply text-2xl;
}
.nuxt-content h3 {
  @apply text-xl;
}
.nuxt-content h4,
.nuxt-content h5,
.nuxt-content h6 {
  @apply text-lg;
}

.nuxt-content p {
  @apply mb-6;
}

.nuxt-content ol {
  @apply list-decimal pl-4;
}

.nuxt-content pre {
  @apply mb-6;
}

.nuxt-content table {
  @apply w-full text-sm text-left mb-6;
}

.nuxt-content table thead {
  @apply text-xs text-gray-700 uppercase;
}

.nuxt-content table thead th {
  @apply px-6 py-3 border border-gray-700;
}

.nuxt-content table tbody tr {
  @apply bg-white border border-gray-700;
}

.nuxt-content table tbody td {
  @apply px-6 py-4 border border-gray-700;
}
</style>
