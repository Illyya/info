<template>
  <div>
    <h1>{{ sectionTitle }}</h1>

    <p>Количество посищений: {{ numberOfVisits }}</p>
  </div>
</template>

<script>
export default {
  name: "Users",
  data() {
    return {
      sectionTitle: "Пользователи",
      numberOfVisits: this.$store.state.numberOfVisitsUsers,
    };
  },
  beforeCreate() {
    this.$store.commit("increaseCounter", "numberOfVisitsUsers");
  },
  created() {
    this.$notify(`Текущий раздел: ${this.sectionTitle}`);
  },
};
</script>

<style>
</style>