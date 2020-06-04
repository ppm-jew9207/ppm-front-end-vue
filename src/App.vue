<template>
  <div id="app" class="min-vh-100 d-flex flex-column">
    <b-container tag="header" class="bg-primary py-5">
      header
    </b-container>
    <b-container tag="main" class="flex-grow-1">
      
      <my-hw msg="Laimonas" />

    </b-container> 
    <b-container tag="footer" class="bg-primary py-5">
      footer
    </b-container>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
  }
}
</script>

<style lang="scss">
  @import 'assets/scss/style.scss';
</style>