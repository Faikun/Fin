<template>
  <nav class="nav" :class="enabledBurger ? 'shown' : ''">
    <div class="nav__item">
      <router-link to="/almaty">Алматы</router-link>
    </div>
    <div class="nav__item"><a href="#">Астана</a></div>
    <div class="nav__item nested">
      <div class="nav__item-wrapper">
        <span class="nav__item-text">Другие</span>
        <img class="nav__icon" src="../images/transparent/path.png" alt="path">
      </div>
      <div class="nav__dropdown">
        <a href="#">Павлодар</a>
        <a href="#">Петропавловск</a>
        <a href="#">Семей</a>
        <a href="#">Караганда</a>
        <a href="#">Тараз</a>
        <a href="#">Усть-Каменогорск</a>
        <a href="#">Актобе</a>
      </div>
    </div>
    <div class="nav__item"><router-link to="/about">О нас</router-link></div>
  </nav><!-- ./nav -->
  <div>
    <button @click="enabledBurger = !enabledBurger" :class="enabledBurger ? 'shown' : ''" class="burger" type="button">
      <span class="burger-item">Menu</span>
    </button>
  </div>
</template>

<script>
import {ref} from "vue";

export default {
  name: "nav",
  setup () {
    let enabledBurger = ref(false);
    return {
      enabledBurger
    }
  }
}
</script>

