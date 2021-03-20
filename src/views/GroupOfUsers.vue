<template>
  <div>
    <h1>{{ sectionTitle }}</h1>

    <p>Количество посищений: {{ numberOfVisits }}</p>
  </div>
</template>

<script>
export default {
  name: "GroupOfUsers",
  data() {
    return {
      sectionTitle: "Группы пользователей",
      numberOfVisits: this.$store.state.numberOfVisitsGroupOfUsers,
    };
  },
  beforeCreate() {
    this.$store.commit("increaseCounter", "numberOfVisitsGroupOfUsers");
  },
  created() {
    this.$notify(`Текущий раздел: ${this.sectionTitle}`);
  },
};
</script>

<style>
</style>