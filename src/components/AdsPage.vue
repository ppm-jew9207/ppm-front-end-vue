<template>
  <b-row tag="div" class="my-3">

    <b-col tag="div" lg="6" v-for="n in 10" :key="n">
      <app-ad></app-ad>
    </b-col>  

    <b-pagination
        class="mx-auto"
        v-model="currentPage"
        :total-rows="rows"
        :per-page="perPage"
      ></b-pagination>
  </b-row> 
</template>

<script>
import appAd from '@/components/Ad';

export default {
  components: {
    appAd 
  },
  data() {
    return {
      rows: 30,
      perPage: 15,
      currentPage: 5
    };
  },
}
</script>