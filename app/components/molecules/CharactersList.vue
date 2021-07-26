<template>
  <div class="list-wrapper">
    <div class="list-header">
      <h3>Personagens</h3>
      <BaseInput v-model="searchInput" class="search-input" />
    </div>
    <div v-if="isLoading">
      <Loading />
    </div>
    <div v-else class="list-content" @scroll="scrollHandler">
      <ListItem
        v-for="(item, index) in listItemsUpdated"
        :key="index"
        class="list-card"
        :data="item"
      />
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  name: 'List',

  data() {
    return {
      listItems: [],
      limit: 4,
      offset: 0,
      stopInfinteScroll: false,
      searchInput: '',
      time: null,
      isLoading: false,
    }
  },

  computed: {
    ...mapState(['characters']),

    listItemsUpdated() {
      return this.listItems
    },
  },

  watch: {
    characters: {
      handler() {
        this.characters.length === 0
          ? (this.stopInfinteScroll = true)
          : (this.stopInfinteScroll = false)
      },
    },

    searchInput: {
      handler() {
        this.stopInfinteScroll = false
        this.debounceHandler(this.generateListHandler(), 1000)
      },
    },
  },

  async created() {
    this.isLoading = true
    await this.generateListHandler()
    this.isLoading = false
  },

  methods: {
    ...mapActions({
      getCharacters: 'getCharacters',
    }),

    async generateListHandler() {
      const obj = {
        limit: 4,
        offset: 0,
        name: this.searchInput,
      }
      await this.getCharacters(obj)
      this.listItems = this.characters.map((item) => item)
    },

    async scrollHandler(event) {
      var el = event.srcElement
      if (
        el.scrollTop >= el.scrollHeight - el.clientHeight &&
        !this.stopInfinteScroll
      ) {
        this.debounceHandler(this.scrolledtoBottomHandler(), 1000)
      }
    },

    async scrolledtoBottomHandler() {
      const obj = {
        limit: 4,
        offset: this.offset + 4,
        name: this.searchInput,
      }
      await this.getCharacters(obj)
      this.characters.forEach((element) => {
        this.listItems.push(element)
      })
      this.offset = this.offset + 4
    },

    debounceHandler(payload, timer) {
      clearTimeout(this.time)
      this.time = setTimeout(() => {
        payload
      }, timer)
    },
  },
}
</script>

<style lang="sass" scoped>
.list-wrapper
  min-height: 68em
  background-color: $base-gray
  padding: 3em

  .list-content
    max-height: 800px
    overflow: auto

    .list-card
      margin-bottom: 20px

  .list-header
    display: flex
    align-items: center
    justify-content: space-between
    border-bottom: 1px solid $mid-gray
    padding-bottom: 1em
    margin-bottom: 1em

    h3
      font-size: 24px
      font-weight: 500

    .search-input
      width: 40%

\::-webkit-scrollbar
  width: 10px

\::-webkit-scrollbar-track
  background: #fff
  border-bottom-right-radius: 15px
  border-top-right-radius: 15px

\::-webkit-scrollbar-thumb
  background: green
  border-radius: 15px
  cursor: pointer

  &:hover
    opacity: 0.7
</style>
