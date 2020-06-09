<template>
  <div>
    <h2 class="registracija">Prisijungti</h2>
    <b-form class="registracijosForma" @submit="onSubmit" @reset="onReset" v-if="show">
      <b-form-group
        id="input-group-1"
        label="Email address:"
        label-for="input-1"
        description="We'll never share your email with anyone else."
      >
        <b-form-input
          id="input-1"
          v-model="form.email"
          type="email"
          required
          placeholder="Enter email"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Password:" label-for="input-2">
        <b-form-input id="input-2" type="password" v-model="form.password" required placeholder="Enter password"></b-form-input>
      </b-form-group>
      <b-button type="submit" variant="primary">Submit</b-button>
    </b-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        email: "",
        name: "",
        food: null,
        checked: []
      },
      show: true
    };
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault();
      alert(JSON.stringify(this.form));
    }
  }
};
</script>
<style scoped>
.registracija {
  text-align: center;
}
.registracijosForma {
  max-width: 450px;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  margin-top: 61px;
  margin-bottom: 42px;
}
</style>
