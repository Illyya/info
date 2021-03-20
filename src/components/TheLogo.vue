<template>
  <router-link to="/" class="logo">
    <img class="logo__img" src="@/assets/logo.png" alt="logo" />
  </router-link>
</template>

<script>
export default {
  name: "TheLogo",
};
</script>

<style lang="scss">
.logo {
  max-width: 70px;

  &__img {
    width: 100%;
  }
}
</style>