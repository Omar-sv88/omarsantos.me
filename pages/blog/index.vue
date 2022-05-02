<template>
  <Wrapper>
    <template #content-sidebar>
      <ArticleList title="" />
      <CategoryList />
    </template>
    <template #footer>
      <Footer />
    </template>
  </Wrapper>
</template>

<script>
import ArticleList from '~/components/shared/ArticleList.vue'
import Wrapper from '~/components/layout/Wrapper.vue'
import Footer from '~/components/layout/Footer.vue'
import CategoryList from '~/components/shared/CategoryList.vue'

export default {
  components: { ArticleList, Wrapper, Footer, CategoryList },
}
</script>
