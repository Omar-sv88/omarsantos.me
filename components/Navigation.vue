<template>
  <section
    class="h-16 w-full fixed z-20 flex items-center shadow transition-colors"
    :class="{
      'bg-white': (changeBgOnScroll && isScrolled) || !changeBgOnScroll,
      'bg-black text-white': changeBgOnScroll && !isScrolled,
    }"
  >
    <div class="container mx-auto px-8 flex items-center justify-between">
      <h1 class="text-2xl">
        <NuxtLink to="/" class="text-indigo-500 text-4xl font-semibold"
          >OS</NuxtLink
        >
      </h1>
      <nav>
        <ul>
          <li>
            <NuxtLink to="/blog">Artículos</NuxtLink>
          </li>
        </ul>
      </nav>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    changeBgOnScroll: {
      type: Boolean,
      default: false,
    },
  },
  data: () => {
    return {
      isScrolled: false,
    }
  },
  mounted() {
    if (this.changeBgOnScroll) this.addWindowScrollListener()
  },
  destroyed() {
    this.removeWindowScrollListener()
  },
  methods: {
    addWindowScrollListener() {
      window.addEventListener('scroll', this.changeNavBg)
    },
    removeWindowScrollListener() {
      window.removeEventListener('scroll', this.changeNavBg)
    },
    changeNavBg() {
      const scrollTop = document.documentElement.scrollTop
      this.isScrolled = scrollTop > 0
    },
  },
}
</script>
