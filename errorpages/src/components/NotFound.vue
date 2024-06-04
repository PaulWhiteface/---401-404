<template>
  <div class="not-found">
    <div class="not-found__text-container">
      <h1 class="not-found__title">ТЫ НЕ АВТОРИЗОВАН</h1>
      <h2 class="not-found__text">Пожалуйста, войдите в систему или создайте учётную запись, чтобы получить доступ к этой странице.</h2>
      <button class="not-found__button">Авторизоваться</button>
      <button class="not-found__button not-found__button-return">Вернуться на главную</button>
    </div>
    <div class="not-found__image-container">
      <img class="not-found__image" src="../assets/img/NotFoundLarge.png" alt="" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'NotFound',
  props: {
  }
}
</script>

<style scoped>
  div, h1, h2, button {
    outline: 1px solid red;
  }

  .not-found {
    background-color: #F2F1EC;
    height: 100vh;
    display: flex;
    align-items: center;
    padding: 0 60px;
    font-family: Nunito Sans;
    color: #414143;
  }

  .not-found__text-container {
    display: flex;
    flex-direction: column;
    max-width: 722px;
  }
  
  .not-found__title {
    font-family: Unbounded;
    font-weight: 700;
    font-size: 48px;
    line-height: 57.6px;
    white-space: nowrap;
  }

  .not-found__text {
    font-weight: 600;
    font-size: 20px;
    line-height: 24px;
  }

  .not-found__image-container {
    max-width: 1018px;
    max-height: 515px
  }

  .not-found__image {
    width: 100%;
    height: 100%;
  }
  
  .not-found__button {
    font-weight: 700;
    font-size: 24px;
    line-height: 32.74px;
    color: #414143;
    max-width: 425px;
    max-height: 73px;
    border: none;
    border-radius: 50px;
    padding: 20px 32px;
    background-color: #C9FF22;
    margin-bottom: 10px;
  }

  .not-found__button-return {
    background-color: #F2F1EC;
    border: 1px solid #C9FF22;
    margin-bottom: 0;
  }

</style>