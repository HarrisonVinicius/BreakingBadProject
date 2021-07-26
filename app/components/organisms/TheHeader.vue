<template>
  <header>
    <div
      class="header-container headroom"
      :class="{
        'headroom--unpinned': scrolled,
      }"
      v-on="{ handleScroll }"
    >
      <Logo class="header-container__logo" />
    </div>
  </header>
</template>

<script>
export default {
  name: 'TheHeader',
  data() {
    return {
      scrolled: false,
      lastPosition: 0,
      limitPosition: 100,
    }
  },

  methods: {
    handleScroll() {
      if (this.lastPosition < window.scrollY) this.scrolled = true

      if (
        this.lastPosition > window.scrollY &&
        this.limitPosition > window.scrollY
      )
        this.scrolled = false

      this.lastPosition = window.scrollY
    },

    clickHandler() {
      this.$router.go(-1)
    },
  },

  beforeMount() {
    window.addEventListener('scroll', this.handleScroll)
  },

  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll)
  },
}
</script>

<style lang="sass" scoped>
header
  z-index: 5 !important

.header-container
  width: 100%
  padding: 2em 10em
  display: flex
  justify-content: space-between
  align-items: center

  @media (max-width: 1200px)
    padding: 2em 2em !important

  &__link
    width: 4% !important

  &__logo
    width: 165px !important
    height: 50px !important
    padding-top: 20px

.headroom
  will-change: padding
  transition: padding 100ms ease-in-out

.headroom--unpinned
  padding: 1em 10em
</style>
