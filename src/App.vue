<template>
  <div class="app">
    <notifications :duration="durationOfNotification" :max="maximumNotifications" />
    <router-view class="app" />
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      durationOfNotification: 1000,
      maximumNotifications: 2,
    }
  }
}
</script>

<style lang="scss">
* {
  padding: 0;
  margin: 0;
  border: 0;
}
*,
*:before,
*:after {
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}
:focus,
:active {
  outline: none;
}
a:focus,
a:active {
  outline: none;
}

nav,
footer,
header,
aside {
  display: block;
}

html,
body {
  height: 100%;
  width: 100%;
  font-size: 100%;
  line-height: 1.2;
}
input,
button,
textarea {
  font-family: inherit;
  font-size: inherit;
}

input::-ms-clear {
  display: none;
}
button {
  cursor: pointer;
}
button::-moz-focus-inner {
  padding: 0;
  border: 0;
}
a {
  color: inherit;
}
a,
a:visited,
a:hover {
  text-decoration: none;
}
ul li {
  list-style: none;
}
img {
  max-width: 100%;
}

body {
  font-family: Arial, Helvetica, sans-serif;
}

.app {
  display: flex;
  flex-direction: column;
  height: 100%;
}
</style>
