export default (ctx, inject) => {
  const { $axios } = ctx

  inject('api', $axios)
}
