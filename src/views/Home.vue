<template>
  <div>
    <TheHeader>
      <DropDownList class="header__drop-down-list" />
    </TheHeader>     

    <div class="sidebar-and-content">
      <TheSidebarHome class="sidebar-and-content__sidebar" />

      <router-view class="sidebar-and-content__content" />
    </div>
  </div>
</template>

<script>
import TheSidebarHome from "../components/TheSidebarHome.vue";
import TheHeader from "../components/TheHeader.vue";
import DropDownList from "../components/DropDownList.vue";

export default {
  components: { TheHeader, TheSidebarHome, DropDownList },
  name: "Home",
};
</script>

<style lang="scss">
.sidebar-and-content {
  flex: 1;
  display: flex;
  
  &__sidebar {
    margin-right: 20px;
  }

  &__content {
    padding: 20px;
    flex: 1;
    background-color: rgb(246, 255, 255);
  }
}
</style>
