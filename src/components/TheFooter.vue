<template>
<footer class="footer">
  <div class="container">
    <div class="footer__wrapper">
      <div class="footer__logo">
        <img src="../images/transparent/logo-removedBg.png" alt="logo">
      </div>
      <div class="footer__info">
        <div class="footer__cities">
          <div class="footer__cities-block">
            <router-link to="/almaty">Алматы</router-link>
            <a href="#">Астана</a>
            <a href="#">Павлодар</a>
          </div>
          <div class="footer__cities-block">
            <a href="#">Петропавловск</a>
            <a href="#">Семей</a>
            <a href="#">Караганда</a>
          </div>
          <div class="footer__cities-block">
            <a href="#">Тараз</a>
            <a href="#">Усть-Каменогорск</a>
            <a href="#">Актобе</a>
          </div>
        </div><!-- ./footer__cities -->
        <div class="footer__additional">
          <router-link class="footer__additional-aboutUs" to="/about">О нас</router-link>
          <span class="footer__copyright">Все права защищены © 2022</span>
        </div><!-- ./footer__additional -->
      </div><!-- ./footer__info -->
    </div><!-- ./footer__wrapper -->
  </div><!-- ./container -->
</footer><!-- ./footer -->
</template>

<script>
export default {
  name: "TheFooter"
}
</script>

<style scoped>

</style>
