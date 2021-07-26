<template>
  <div ref="card" class="base-card">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'BaseCard',
}
</script>

<style lang="sass" scoped>
.base-card
  background-color: #fff
  width: 100%
  border-radius: 5px
  border: 1px solid $mid-gray

  &:hover
    -webkit-box-shadow: 0px 0px 16px 2px rgba(56,56,56,0.56)
    box-shadow: 0px 0px 16px 2px rgba(56,56,56,0.56)
</style>
