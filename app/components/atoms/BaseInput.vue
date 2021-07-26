<template>
  <div class="base-input">
    <slot />
    <input v-model="value" type="text" :placeholder="placeholder" />
  </div>
</template>

<script>
export default {
  name: 'BaseInput',
  props: {
    placeholder: {
      type: String,
      required: false,
      default: 'Buscar...',
    },
  },
  data() {
    return {
      value: null,
    }
  },
  watch: {
    value: {
      handler() {
        this.$emit('input', this.value)
      },
    },
  },
}
</script>

<style lang="sass" scoped>
.base-input
  height: 100%
  width: 100%
  display: flex
  position: relative
  z-index: 0

  input
    border: 1px solid $mid-gray
    border-radius: 5px
    overflow: none
    width: 100%
    height: 100%
    padding: 15px 25px 15px 25px
    font-size: 18px
    opacity: 0.7
    outline: 0

    &:hover
      border: 1px solid $base-blue

    &:focus
      border: 1px solid $base-blue
</style>
