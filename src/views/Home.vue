<template>
  <div class="container-fluid">
    <p>Home</p>
    <form>
      <div class="form-group">
        <label for="fname">First Name</label>
        <input
          type="text"
          class="form-control"
          id="fname"
          placeholder="Enter First Name"
          v-model="user.firstName"
        />
      </div>
      <div class="form-group">
        <label for="lname">Last Name</label>
        <input
          type="text"
          class="form-control"
          id="lname"
          placeholder="Last Name"
          v-model="user.lastName"
        />
      </div>
    </form>
    <button class="btn btn-primary" @click.prevent="submituser">
      Submit User
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent, onUpdated, reactive, ref } from "vue";
import { User } from "../getdb";
export default defineComponent({
  name: "Home",
  setup() {
    const user = reactive({
      firstName: "" as string,
      lastName: "" as string,
    });
    const submituser = async () => {
      console.log(user);

      await User.create(user).then(() => {
        User.findAll().then((res) => {
          console.log(res);
        });
      });
    };
    return { user, submituser };
  },
});
</script>

<style lang="scss" scoped></style>
