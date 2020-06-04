<template>
  <div class="hello">
    <h1>{{ msg }} {{title}}</h1>
    <button v-on:click="changeData" >Keisti</button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data(){
    return {
      id:12123,
      title: "Sveiki!!!"
    }
  },
  methods:{
    changeData(){
      this.title = "Sveiki Visi!!";
    },
    changeData2(){
      this.title = "Sveiki Visi!!";
    }
  },
  props: {
    msg: String
  }
}
</script>

