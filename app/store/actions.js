export default {
  async getCharacters({ commit }, payload) {
    const res = await this.$api.$get(
      `/api/characters?name=${payload.name}&limit=${payload.limit}&offset=${payload.offset}`
    )
    commit('SET_CHARACTERS', res)
  },
}
