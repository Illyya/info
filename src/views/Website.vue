<template>
  <div>
    <h1>{{ sectionTitle }}</h1>
    <p>Количество посищений: {{ numberOfVisits }}</p>
  </div>
</template>

<script>
export default {
  name: "Website",
  data() {
    return {
      sectionTitle: 'Сайт',
      numberOfVisits: this.$store.state.numberOfVisitsWebsite,
    };
  },
  beforeCreate() {
    this.$store.commit("increaseCounter", "numberOfVisitsWebsite");
  },
  created() {
    this.$notify(`Текущий раздел: ${this.sectionTitle}`);
  },
};
</script>

<style>
</style>