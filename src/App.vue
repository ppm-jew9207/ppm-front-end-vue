<template>
  <div id="app">
     <div class="grid-container">
      <div class="grid-item">Header</div>
      <div class="grid-item">Main</div>
      <div class="grid-item">Footer</div>
    </div> 
  </div>
</template>

<script>


export default {
  name: 'App',
  components: {
    
  }
}
</script>

<style>
/* .grid-container {
  display: grid;
} */
.grid-container {
  display: grid;
  grid-template-columns: 620px;
  grid-gap: 10px;
  background-color: #2196F3;
  padding: 10px;
  justify-content: center;
}

.grid-container > div {
  background-color: rgba(255, 255, 255, 0.8);
  text-align: center;
  padding: 20px 0;
  font-size: 20px;
}
</style>