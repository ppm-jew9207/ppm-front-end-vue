<template>
  <b-card no-body class="overflow-hidden mb-3 ad" >
    <b-row no-gutters>
      <b-col sm="4" md="3" aspect="1:1" class="ad__img">
        <b-card-img src="https://picsum.photos/150/150/?image=20" alt="Image" class="rounded-0"></b-card-img>
      </b-col>
      <b-col sm="8" md="9">
        <b-card-body title="Vue apmokymai">
          <b-card-text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque ullam accusantium quia, saepe ipsa enim! Id debitis quibusdam optio obcaecati?
          </b-card-text>
        </b-card-body>
      </b-col>
    </b-row>
  </b-card>
</template>

<style lang="scss" scoped>
  .ad {
    &__img {
      overflow: hidden;
      max-height: 150px;
      @media (min-width: 575px) {
        max-height: unset;
        min-height: 100%;
        img {
          min-height: 100%;
          width: auto;
        }
      }
    }
  }
</style>