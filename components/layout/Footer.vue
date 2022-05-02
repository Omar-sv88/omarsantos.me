<template>
  <footer class="text-center py-4">
    <section class="w-full flex items-center justify-center gap-2 mb-2">
      <a
        v-for="(item, index) of rrss"
        :key="index"
        :href="item.url"
        target="_blank"
        class="rrss--item"
      >
        <svg-icon class="w-6 h-6 transition-colors" :name="item.logo" />
      </a>
    </section>
    <small
      >&copy; {{ new Date().getFullYear() }} — Web diseñada y programada por
      <strong>Omar Santos</strong> usando <strong>Vue.js</strong> &
      <strong>Nuxt</strong> con &#10084; en <strong>León</strong>.</small
    >
  </footer>
</template>

<script>
const rrss = [
  {
    name: 'Twitter',
    url: 'https://twitter.com/omar_sv88',
    logo: 'twitter.svg',
  },
  {
    name: 'Linkedin',
    url: 'https://www.linkedin.com/in/omar-sv88/',
    logo: 'linkedin.svg',
  },
  {
    name: 'Github',
    url: 'https://github.com/Omar-sv88',
    logo: 'github.svg',
  },
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/omar_sv88/',
    logo: 'instagram.svg',
  },
]

export default {
  data: () => ({
    rrss,
  }),
}
</script>

<style scoped>
.rrss--item:hover > svg {
  @apply text-indigo-500;
}
</style>
