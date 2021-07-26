<template>
  <div class="logo">
    <div v-for="(item, index) in title" :key="index" class="header-title">
      <div class="green-square">
        <h1 class="white">{{ item.white }}</h1>
      </div>
      <h1>{{ item.label }}</h1>
    </div>
    <h1 class="header-subtitle">Infos</h1>
  </div>
</template>

<script>
export default {
  name: 'Logo',
  data() {
    return {
      title: [
        { white: 'Br', label: 'eaking' },
        { white: 'ba', label: 'd' },
      ],
    }
  },
}
</script>

<style lang="sass" scoped>
.logo
  height: 100%
  width: 100%
  margin-bottom: 10px
  display: flex
  justify-content: center
  align-items: center

  .header-subtitle
    color: black
    font-style: italic
    font-weight: 300

  h1
    font-size: 22px
    color: green

  .white
    color: #fff

  .header-title
    display: flex
    align-items: center
    margin-right: 10px

    .green-square
      width: 40px
      height: 40px
      background-color: green
      display: flex
      justify-content: center
      align-items: center
</style>
