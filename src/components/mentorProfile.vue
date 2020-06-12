<template>
  <div class="post-block">
    <b-card>
      <b-container class="bv-example-row">
        <b-row>
          <b-col cols="2">
            <div class="clearfix">
              <b-img left src="https://picsum.photos/125/125/?image=58" alt="Left image"></b-img>
            </div>
          </b-col>
          <b-col cols="10">
            <b-card title="Antraste">
              <b-card-text>
                <span>
                  <b>Atraste:</b> Programavimo pamokos
                </span>
              </b-card-text>
              <b-card-text>
                <span>
                  <b>Vardas:</b> Jonas
                </span>
              </b-card-text>
              <b-card-text>
                <span>
                  <b>Telefonas:</b> +37025489632
                </span>
              </b-card-text>
              <b-card-text>
                <span>
                  <b>Miestas:</b> Vilnius
                </span>
              </b-card-text>
            </b-card>
          </b-col>
        </b-row>
      </b-container>
      <div class="desc">
        <h2>Aprasymas</h2>
        <p>Some quick example text to build on the card and make up the bulk of the card's content.</p>
      </div>
    </b-card>
    <div></div>
  </div>
</template>

<script>
export default {
  name: "mentorProfile"
};
</script>

<style scoped>
.float-left {
  width: 168px;
}
.post-block {
  margin-top: 20px;
}
.desc {
  text-align: center;
}
h2 {
  margin-top: 26px;
}
</style>