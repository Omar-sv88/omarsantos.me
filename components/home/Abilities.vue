<template>
  <section class="mt-24">
    <header class="mb-12">
      <h2 class="font-semibold text-3xl">💪 Mis habilidades</h2>
    </header>
    <div
      class="content grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4"
    >
      <section
        v-for="(ability, index) in abilities"
        :key="index"
        class="p-4 border rounded flex items-center gap-4"
      >
        <header v-if="ability.logo !== ''">
          <svg-icon class="w-12 h-12" :name="ability.logo" />
        </header>
        <div class="content">
          <h4 class="text-sm font-semibold">{{ ability.name }}</h4>
          <p class="text-xs">{{ getAbilityYearsText(ability.years) }}</p>
        </div>
      </section>
    </div>
  </section>
</template>

<script lang="ts">
const abilities = [
  {
    name: 'HTML',
    years: 7,
    logo: 'html.svg',
  },
  {
    name: 'CSS',
    years: 7,
    logo: 'css.svg',
  },
  {
    name: 'JavaScript',
    years: 6,
    logo: 'javascript.svg',
  },
  {
    name: 'PHP',
    years: 5,
    logo: 'php.svg',
  },
  {
    name: 'MySQL',
    years: 5,
    logo: 'mysql.svg',
  },
  {
    name: 'Angular',
    years: 4,
    logo: 'angular.svg',
  },
  {
    name: 'Vue.js',
    years: 4,
    logo: 'vuejs.svg',
  },
  {
    name: 'TypeScript',
    years: 4,
    logo: 'typescript.svg',
  },
  {
    name: 'Sass',
    years: 4,
    logo: 'sass.svg',
  },
  {
    name: 'Node.js',
    years: 4,
    logo: 'nodejs.svg',
  },
  {
    name: 'git',
    years: 3,
    logo: 'git.svg',
  },
  {
    name: 'SQL',
    years: 3,
    logo: 'sql.svg',
  },
  {
    name: 'Visual Basic',
    years: 2,
    logo: 'visualbasic.svg',
  },
  {
    name: 'Ionic',
    years: 2,
    logo: 'ionic.svg',
  },
]

export default {
  data: () => ({
    abilities,
  }),
  methods: {
    getAbilityYearsText(years) {
      return years === 1
        ? `${years} año de experiencia`
        : `${years} años de experiencia`
    },
  },
}
</script>
