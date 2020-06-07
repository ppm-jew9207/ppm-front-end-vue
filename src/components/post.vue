<template>
  <div class="post-block">
    <b-container class="bv-example-row">
      <b-row>
        <b-col cols="2">
          <div class="clearfix">
            <b-img left src="https://picsum.photos/125/125/?image=58" alt="Left image"></b-img>
          </div>
        </b-col>
        <b-col cols="10">
          <b-card title="Card title" sub-title="Card subtitle">
            <b-card-text>
              Some quick example text to build on the
              <em>card title</em> and make up the bulk of the card's
              content.
            </b-card-text>
            <b-card-text>A second paragraph of text in the card.</b-card-text>
          </b-card>
        </b-col>
      </b-row>
    </b-container>
    <div></div>
  </div>
</template>


<script>
export default {
  name: "post"
};
</script>

<style scoped>
.float-left {
  width: 168px;
}
.post-block {
  margin-top: 20px;
}
</style>