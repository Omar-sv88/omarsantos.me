<template>
  <section>
    <Navigation />
    <slot name="before-container"></slot>
    <section
      class="container mx-auto px-4 lg:flex lg:gap-8 lg:justify-between"
      :class="{ 'my-8': withMarginBottom }"
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
  props: {
    withMarginBottom: {
      type: Boolean,
      default: true,
    },
  },
}
</script>
