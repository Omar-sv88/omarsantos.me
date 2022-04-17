<template>
  <section>
    <Navigation />
    <section
      class="container mx-auto my-8 px-4 lg:flex lg:gap-8 lg:justify-between"
    >
      <slot name="content"></slot>
    </section>
    <slot name="footer"></slot>
  </section>
</template>

<script>
import Navigation from './Navigation.vue'

export default {
  components: {
    Navigation,
  },
}
</script>
