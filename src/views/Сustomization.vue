<template>
  <div>
    <TheHeader>
      <router-link to="/">
        <AppButton :nameButton="nameButton" />
      </router-link>
    </TheHeader>

    <div class="sidebar-and-content">
      <TheSidebarСustomization class="sidebar-and-content__sidebar" />

      <router-view class="sidebar-and-content__content" />
    </div>
  </div>
</template>

<script>
import AppButton from "../components/AppButton.vue"
import TheHeader from "../components/TheHeader.vue";
import TheSidebarСustomization from "../components/TheSidebarСustomization.vue";

export default {
  components: { TheHeader, TheSidebarСustomization, AppButton },
  name: "Customization",
  data() {
    return {
      nameButton: 'Вернуться к публичной части'
    }
  }
};
</script>