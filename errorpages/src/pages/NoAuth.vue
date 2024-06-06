<template>
  <div class="no-auth">
    <div class="no-auth__text-container">
      <h1 class="no-auth__title">ТЫ НЕ АВТОРИЗОВАН</h1>
      <h2 class="no-auth__text">Пожалуйста, войдите в систему или создайте учётную запись, чтобы получить доступ к этой странице.</h2>
      <button class="no-auth__button">Авторизоваться</button>
      <button class="no-auth__button no-auth__button-return">Вернуться на главную</button>
    </div>
    <picture class="no-auth__image-container">
      <source srcset="../assets/img/NoAuthMedium.svg" media="(max-width: 768px)">
      <source srcset="../assets/img/NoAuthSmall.svg" media="(max-width: 360px)">

      <img class="no-auth__image" src="../assets/img/NoAuthLarge.svg" alt="" />
    </picture>
  </div>
</template>

<script>
export default {
  name: 'NoAuth',
  props: {
  }
}
</script>

<style scoped>
  .no-auth {
    background-color: #F2F1EC;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 60px;
    font-family: Nunito Sans;
    color: #414143;
  }

  .no-auth__text-container {
    display: flex;
    flex-direction: column;
    max-width: 722px;
  }
  
  .no-auth__title {
    font-family: Unbounded;
    font-weight: 700;
    font-size: 48px;
    line-height: 57.6px;
    white-space: nowrap;
    margin-bottom: 30px;
  }

  .no-auth__text {
    font-weight: 600;
    font-size: 20px;
    line-height: 24px;
    margin-bottom: 30px;
  }

  .no-auth__image-container {
    max-width: 1018px;
    max-height: 515px
  }

  .no-auth__image {
    width: 100%;
    height: 100%;
  }
  
  .no-auth__button {
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
    margin-bottom: 20px;
    cursor: pointer;
  }

  .no-auth__button-return {
    background-color: #F2F1EC;
    border: 1px solid #C9FF22;
    margin-bottom: 0;
  }

  @media screen and (max-width: 1400px) {

    .no-auth__title {
      font-size: 26px;
      line-height: 31.2px;
    }

    .no-auth__text {
      font-size: 16px;
      line-height: 19.2px;
    }

    .no-auth__button {
      width: 259px;
      max-height: 55px;
      font-size: 20px;
      line-height: 27.28px;
      padding: 14px 20px;
      white-space: nowrap;
    }
  }

  @media screen and (max-width: 1111px) {
    .no-auth {
      flex-direction: column-reverse;
    }

    .no-auth__text-container {
      align-items: center;
    }

    .no-auth__text {
      text-align: center;
    }
  }

  @media screen and (max-width: 768px) {
    .no-auth {
      justify-content: start;
    }

    .no-auth__image-container {
      margin-top: 200px;
    }
  }

  @media screen and (max-width: 484px) {
    .no-auth {
      padding: 0 10px;
    }

    .no-auth__text-container {
      align-items: start;
      max-width: 320px;
    }

    .no-auth__title {
      font-size: 20px;
      line-height: 24px;
    }

    .no-auth__text {
      text-align: start;
    }

    .no-auth__button {
      align-self: center;
      width: 320px;
    }

    .no-auth__image-container {
      margin-top: 100px;
    }
  }

</style>