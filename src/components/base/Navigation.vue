<template>
  <nav>
    <router-link to="/profile">Profilis |</router-link>
    <router-link to="/settings"> Nustatymai</router-link>
  </nav>
</template>

<script>
    export default {
        name: "nav-buttom",
        props: ['active']
    }
</script>
