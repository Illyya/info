<template>
  <div class="drop-down-list">
    <select name="list" id="list" class="drop-down-list__input">
      <option value="" selected>Выпадающий список</option>
      <option value="1">Значение 1</option>
      <option value="2">Значение 2</option>
      <option value="3">Значение 3</option>
    </select>
  </div>
</template>

<script>
export default {
  name: 'DropDownList'
};
</script>

<style lang="scss">
.drop-down-list {
  &__input {
  }
}
</style>