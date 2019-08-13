<template>
  <div class="body">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <navbar v-if="this.$route.path != '/login' && this.$route.path != '/register' "/>
    <div class="row">
      <div class="col-md-4">
        <sidenav v-if="this.$route.path != '/login' && this.$route.path != '/register'"/>
      </div>
      <div class="col-md-8">
        <router-view />
      </div>
    </div>
  </div>
</template>
<script>
import navbar from "./components/navbar.vue";
import sidenav from "./components/sidenav.vue";
export default {
  components: {
    navbar,
    sidenav
  }
};
</script>
<style>
body {
overflow-x: hidden;
}
@media screen and  (max-width: 799px) {
  .body{
     display: flex;
        flex: 1;
  }
}


</style>

