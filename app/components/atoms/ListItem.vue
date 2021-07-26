<template>
  <BaseCard>
    <div class="character-card">
      <div class="card-wrapper">
        <div class="avatar">
          <img :src="data.img" alt="avatar" class="avatar-image" />
        </div>
        <div class="content">
          <h4>{{ data.name }} ({{ data.nickname }})</h4>
          <h4>ator: {{ data.portrayed }}</h4>
          <div v-if="data.birthday !== 'Unknown'" class="row">
            <span class="label"> Aniversário: </span>
            <span class="birthday"> {{ date }} </span>
          </div>
          <div class="row-occupation">
            <span class="label"> Ocupação: </span>
            <span
              v-for="(occupation, index) in data.occupation"
              :key="index"
              class="occupation"
            >
              {{ occupation }},
            </span>
          </div>
          <br />
          <div class="row">
            <span class="label"> Temporadas: </span>
            <span
              v-for="(season, index) in data.appearance"
              :key="index"
              class="occupation"
            >
              {{ season }}ª,
            </span>
          </div>
        </div>
      </div>
    </div>
  </BaseCard>
</template>

<script>
export default {
  name: 'ListItem',

  data() {
    return {
      date: '',
    }
  },

  props: {
    data: {
      type: Object,
      default: () => {},
    },
  },

  mounted() {
    this.date = this.formatBirthday(this.data.birthday)
  },

  methods: {
    formatBirthday(data) {
      var day = data.split('-')[0]
      var month = data.split('-')[1]
      var year = data.split('-')[2]

      return ('0' + day).slice(-2) + '/' + ('0' + month).slice(-2) + '/' + year
    },
  },
}
</script>

<style lang="sass" scoped>
.character-card
  padding: 20px

  .card-wrapper
    display: flex

    .content
      width: 80%
      padding-left: 2em

      .row-occupation
        .label
          margin-right: 5px
          color: green

      .row
        display: flex

        .label
          margin-right: 5px
          color: green

        h4
          font-size: 22px

    .avatar
      height: 250px
      width: 250px
      background-color: black

      .avatar-image
        width: 100%
        height: 100%
</style>
