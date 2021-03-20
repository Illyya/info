<template>
  <header class="header">
    <TheLogo class="header__logo" />
    
    <slot></slot>
    
    <AppButton :nameButton="nameButton" class="header__button" />
  </header>
</template>

<script>
import AppButton from './AppButton.vue';
import TheLogo from './TheLogo.vue';

export default {
  components: { TheLogo, AppButton },
  name: 'TheHeader',
  data() {
    return {
      nameButton: 'Выйти'
    }
  }
};
</script>

<style lang="scss">
.header {
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: rgb(186, 185, 252);
  margin-bottom: 20px;

  &__logo {
  }

  &__drop-down-list {
  }

  &__button {
  }
}
</style>