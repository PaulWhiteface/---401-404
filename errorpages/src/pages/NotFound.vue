<template>
  <div class="not-found">
    <h1 class="not-found__title">СТРАНИЦА НЕ НАЙДЕНА</h1>
    <picture class="not-found__picture">
      <source srcset="../assets/img/NotFoundMedium.svg" media="(max-width: 768px)">
      <source srcset="../assets/img/NotFoundSmall.svg" media="(max-width: 360px)">

      <img class="not-found__image" src="../assets/img/NotFoundLarge.svg" alt="" />
    </picture>
    <button class="not-found__button">Вернуться на главную</button>
  </div>
</template>

<script>
export default {
  name: 'NotFound',
  props: {
    
  }
}
</script>

<style>

div, h1, h2, button {
    outline: 1px solid red;
  }

</style>