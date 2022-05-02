<template>
  <section>
    <header class="mb-12">
      <h2 class="font-semibold text-3xl">{{ title }}</h2>
    </header>
    <div
      v-if="articles.length > 0"
      class="content grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4"
    >
      <Article
        v-for="(article, index) in articles"
        :key="index"
        :article="article"
      />
    </div>
    <div v-else class="content">
      <p class="text-center" v-html="withoutArticlesText"></p>
    </div>
    <footer
      v-if="(haveNextPage || havePrevPage) && canShowPagination"
      class="mt-8"
    >
      <Pagination
        :have-next="haveNextPage"
        :have-prev="havePrevPage"
        @go-to-next="onGoToNextPage()"
        @go-to-prev="onGoToPrevPage()"
      />
    </footer>
  </section>
</template>

<script>
import Article from './Article.vue'
import Pagination from './Pagination.vue'

export default {
  components: { Article, Pagination },
  props: {
    title: {
      type: String,
      required: false,
      default: '✍ Últimos artículos',
    },
    category: {
      type: String,
      required: false,
      default: undefined,
    },
    canShowPagination: {
      type: Boolean,
      required: false,
      default: true,
    },
    slug: {
      type: String,
      required: false,
      default: undefined,
    },
    deepSearch: {
      type: Boolean,
      required: false,
      default: true,
    },
    sortBy: {
      type: Array,
      required: false,
      default: () => ['createdAt', 'desc'],
    },
    only: {
      type: Array,
      required: false,
      default: () => [
        'title',
        'extract',
        'path',
        'image',
        'category',
        'createdAt',
        'slug',
      ],
    },
    limit: {
      type: Number,
      required: false,
      default: 10,
    },
  },
  data() {
    return {
      articles: [],
      pageNumber: 1,
      haveNextPage: false,
      havePrevPage: false,
    }
  },
  computed: {
    withoutArticlesText() {
      return this.category === 'Últimos artículos' ||
        this.category === undefined
        ? 'No hay ningún artículo'
        : `No hay ningún artículo sobre <i>${this.category}</i>`
    },
  },
  mounted() {
    this.getArticles()
  },
  methods: {
    async getArticles() {
      const articles = await this.$content(this.category, {
        deep: this.deepSearch,
      })
        .only(this.only)
        .sortBy(this.sortBy[0], this.sortBy[1])
        .search(this.slug)
        .limit(this.limit)
        .skip(this.limit * (this.pageNumber - 1))
        .fetch()

      this.articles = articles
      this.haveNextPage = this.articles.length === this.limit
      this.havePrevPage = this.pageNumber > 1
    },
    onGoToNextPage() {
      this.pageNumber = this.pageNumber + 1
      this.getArticles()
    },
    onGoToPrevPage() {
      this.pageNumber = this.pageNumber - 1
      this.getArticles()
    },
  },
}
</script>
