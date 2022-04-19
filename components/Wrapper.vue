<template>
  <section>
    <Navigation :change-bg-on-scroll="changeNavBgOnScroll" />
    <slot name="before-container"></slot>
    <section
      class="container mx-auto px-4 lg:flex lg:gap-8 lg:justify-between"
      :class="{ 'pt-20': withPaddingTop }"
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
    withPaddingTop: {
      type: Boolean,
      default: true,
    },
    changeNavBgOnScroll: {
      type: Boolean,
      default: false,
    },
  },
}
</script>
