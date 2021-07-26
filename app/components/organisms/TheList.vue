<template>
  <div class="the-list">
    <Resume v-in-viewport.once class="resume" />
    <CharactersList class="characters-list" />
  </div>
</template>

<script>
export default {
  name: 'TheList',
}
</script>

<style lang="sass" scoped>
.the-list
  display: flex

  @media (max-width: 1200px)
    flex-direction: column

    .resume
      width: 100% !important

    .characters-list
      width: 100% !important

  .resume
    width: 40%
    opacity: 0
    transform: translateX(100%)
    transition: transform 1.2s , opacity 1.2s

    &.in-viewport
      opacity: 1
      transform: translateX(0)
      transition: transform 1.2s 1s , opacity 1.2s 1s

  .characters-list
    width: 60%
    animation: slide 1s ease-out forwards

@keyframes slide
  0%
    opacity: 0
    will-change: transform
    transform: translateY(100%)
  100%
    opacity: 1
    will-change: transform
    transform: translateY(0)
</style>
