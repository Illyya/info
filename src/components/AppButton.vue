<template>
  <button class="button">{{ nameButton }}</button>
</template>

<script>
export default {
  name: 'AppButton',
  props: {
    nameButton: {
      type: String
    }
  }
}
</script>

<style lang="scss">
.button {
  padding: 5px 10px;
  color: aliceblue;
  background-color: rgb(82, 131, 133);
  border-radius: 5px;
}
</style>