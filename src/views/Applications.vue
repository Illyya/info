<template>
  <div>
    <h1>{{ sectionTitle }}</h1>
    <p>Количество посищений: {{ numberOfVisits }}</p>
  </div>
</template>

<script>
export default {
  name: "Applications",
  data() {
    return {
      sectionTitle: 'Заявки',
      numberOfVisits: this.$store.state.numberOfVisitsApplications,
    };
  },
  beforeCreate() {
    this.$store.commit("increaseCounter", "numberOfVisitsApplications");
  },
  created() {
    this.$notify(`Текущий раздел: ${this.sectionTitle}`);
  },
};
</script>

<style>
</style>