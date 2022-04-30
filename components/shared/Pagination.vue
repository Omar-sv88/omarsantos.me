<template>
  <section class="flex items-center justify-center gap-4">
    <button
      v-if="havePrev"
      class="p-2 bg-indigo-500 rounded font-semibold shadow hover:bg-indigo-600 hover:shadow-md transition-all text-white"
      @click="goToPrev"
    >
      Artículos más recientes
    </button>
    <button
      v-if="haveNext"
      class="p-2 bg-indigo-500 rounded font-semibold shadow hover:bg-indigo-600 hover:shadow-md transition-all mr-4 text-white"
      @click="goToNext"
    >
      Artículos anteriores
    </button>
  </section>
</template>

<script>
export default {
  props: {
    haveNext: {
      type: Boolean,
      required: true,
    },
    havePrev: {
      type: Boolean,
      required: true,
    },
  },
  methods: {
    goToNext() {
      this.$emit('go-to-next')
    },
    goToPrev() {
      this.$emit('go-to-prev')
    },
  },
}
</script>
