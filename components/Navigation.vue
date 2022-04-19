<template>
  <section
    class="h-16 w-full fixed z-20 flex items-center shadow transition-colors"
    :class="{
      'bg-white': (changeBgOnScroll && isScrolled) || !changeBgOnScroll,
      'bg-black text-white': changeBgOnScroll && !isScrolled,
    }"
  >
    <div class="container flex items-center justify-between">
      <h1 class="text-2xl px-4">
        <NuxtLink to="/" class="text-indigo-500 text-4xl font-semibold"
          >OS</NuxtLink
        >
      </h1>
    </div>
    <nav>
      <ul>
        <li>
          <NuxtLink to="/blog">Artículos</NuxtLink>
        </li>
      </ul>
    </nav>
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
    if (this.changeBgOnScroll) this.changeNavBg()
  },
  methods: {
    changeNavBg() {
      window.addEventListener('scroll', () => {
        const scrollTop = document.documentElement.scrollTop
        this.isScrolled = scrollTop > 0
      })
    },
  },
}
</script>
