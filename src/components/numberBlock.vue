/<template>
  <div class="overflow-auto">
    <b-pagination
      v-model="currentPage"
      :total-rows="rows"
      :per-page="perPage"
      aria-controls="my-table"
    ></b-pagination></div>
</template>

<script>
export default {
    name:"numberBlock",
}
</script>

<style>
.pagination{
margin-top: 31px;
margin-bottom: 31px;}
</style>