<template>
  <nav class="sidebar">
    <ul class="sidebar__list">
      <li class="sidebar__li">
        <router-link to="/" class="sidebar__link">Главная</router-link>
      </li>
      <li class="sidebar__li">
        <router-link to="/website" class="sidebar__link">Сайт</router-link>
      </li>
      <li class="sidebar__li">
        <router-link to="/applications" class="sidebar__link"
          >Заявки</router-link
        >
      </li>
      <li class="sidebar__li">
        <router-link to="/customization/group-of-users" class="sidebar__link"
          >Настройки</router-link
        >
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "SidebarHome",
};
</script>

<style lang="scss">
.sidebar {
  padding: 10px;
  font-size: 1.2rem;
  color: white;
  border-radius: 10px;
  background-color: rgb(186, 185, 252);

  &__list {
  }

  &__li {
    &:not(:last-of-type) {
      margin-bottom: 10px;
    }
  }

  &__link {
    transition: 0.2s ease-out;
    &:hover {
      color: rgb(0, 153, 255);
    }
  }
}

.router-link-exact-active {
  color: rgb(0, 38, 255);
}
</style>