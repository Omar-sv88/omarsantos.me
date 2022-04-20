<template>
  <Wrapper>
    <template #content-sidebar>
      <ArticleList
        :title="`Artículos sobre ${$route.params.slug}`"
        :category="$route.params.slug"
      />
      <CategoryList />
    </template>
    <template #footer>
      <Footer />
    </template>
  </Wrapper>
</template>

<script>
import ArticleList from '~/components/ArticleList.vue'
import Wrapper from '~/components/Wrapper.vue'
import Footer from '~/components/Footer.vue'
import CategoryList from '~/components/CategoryList.vue'

export default {
  components: { ArticleList, Wrapper, Footer, CategoryList },
}
</script>
