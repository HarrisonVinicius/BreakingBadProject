<template>
  <div class="resume">
    <div class="resume-wrapper">
      <div class="resume-image">
        <img class="image" src="/images/cover.jpg" alt="cover" />
      </div>
      <br />
      <h2>
        Breaking Bad é uma série de televisão americana criada e produzida por
        Vince Gilligan. Ela retrata a vida do químico Walter White, um homem
        brilhante frustrado em dar aulas para adolescentes do ensino médio
        enquanto lida com um filho sofrendo de paralisia cerebral, uma esposa
        grávida e dívidas intermináveis. White, então, é diagnosticado com um
        câncer no pulmão - o que o leva a sofrer um colapso emocional e abraçar
        uma vida de crimes para pagar suas dívidas hospitalares e dar uma boa
        vida aos seus filhos.[7] Walter resolve produzir metanfetamina de alta
        pureza com seu ex-aluno, Jesse Pinkman.
      </h2>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Resume',
}
</script>

<style lang="sass" scoped>
.resume
  display: flex
  justify-content: center
  padding-top: 4em
  background: rgb(2,0,36)
  background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(0,0,0,1) 91%, rgba(240,240,240,1) 98%)

  @media (max-width: 1480px)
    .resume-wrapper
      width: 66% !important

      .resume-image
        width: 350px !important
        height: 200px !important

  @media (max-width: 1200px)
    background: black !important

    .resume-wrapper
      width: 90% !important

  .resume-wrapper
    width: 76%

    h2
      color: #fff

    .resume-image
      width: 450px
      height: 300px

      .image
        width: 100%
        height: 100%
</style>
