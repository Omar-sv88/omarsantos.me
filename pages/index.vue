<template>
  <Wrapper :with-padding-top="false" :change-nav-bg-on-scroll="true">
    <template #before-container>
      <Hero />
    </template>
    <template #content-sidebar>
      <ArticleList />
      <CategoryList />
    </template>
    <template #footer>
      <Footer />
    </template>
  </Wrapper>
</template>

<script>
import Wrapper from '~/components/layout/Wrapper.vue'
import Hero from '~/components/home/Hero.vue'
import ArticleList from '~/components/shared/ArticleList.vue'
import CategoryList from '~/components/shared/CategoryList.vue'
import Footer from '~/components/layout/Footer.vue'

export default {
  components: { ArticleList, Wrapper, Footer, CategoryList, Hero },
}
</script>
