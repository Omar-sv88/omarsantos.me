<template>
  <Wrapper :with-padding-top="false" :change-nav-bg-on-scroll="true">
    <template #before-container>
      <Hero />
    </template>
    <template #content>
      <ArticleList />
      <CategoryList />
    </template>
    <template #footer>
      <Footer />
    </template>
  </Wrapper>
</template>

<script>
import Wrapper from '~/components/Wrapper.vue'
import Hero from '~/components/Hero.vue'
import ArticleList from '~/components/ArticleList.vue'
import CategoryList from '~/components/CategoryList.vue'
import Footer from '~/components/Footer.vue'

export default {
  components: { ArticleList, Wrapper, Footer, CategoryList, Hero },
}
</script>
