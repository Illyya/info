<template>
  <div>
    <h1>{{ sectionTitle }}</h1>

    <p>Количество посищений: {{ numberOfVisits }}</p>
  </div>
</template>

<script>
export default {
  name: "HomePageContent",
  data() {
    return {
      sectionTitle: "Главная",
      numberOfVisits: this.$store.state.numberOfVisitsMainPage,
    };
  },
  beforeCreate() {
    this.$store.commit("increaseCounter", "numberOfVisitsMainPage");
  },
  created() {
    this.$notify(`Текущий раздел: ${this.sectionTitle}`);
  },
};
</script>

<style>
</style>