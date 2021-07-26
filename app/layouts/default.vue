<template>
  <div class="general">
    <TheHeader class="general__header" />
    <div class="general__container">
      <nuxt class="general__container__content"></nuxt>
    </div>
  </div>
</template>

<script>
export default {
  name: 'default',
}
</script>

<style lang="sass" scoped>
.general
  background-color: black
  height: 68em

  &__container
    position: relative,
    top: 7.5em

    &__content
      margin: 0 !important

  &__header
    width: 100%
    background-color: #fff
    position: fixed
    z-index: 1
</style>
