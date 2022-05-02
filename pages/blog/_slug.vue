<template>
  <Wrapper>
    <template #content-sidebar>
      <section class="mt-12">
        <header class="mb-6">
          <img
            class="w-auto max-h-80 mb-6 mx-auto"
            :src="article.image"
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
  mounted() {
    if (this.code === 404) this.$router.push('/')
  },
}
</script>

<style>
.nuxt-content h1 {
  @apply text-3xl font-bold;
}
</style>
