<template>
  <form @submit.prevent="submitData">
    <div>
      <label>Name</label>
      <input type="text" v-model="enteredName" />
    </div>
    <div>
      <label>Age</label>
      <input type="number" v-model="enteredAge" />
    </div>

    <button>Add User</button>
  </form>
</template>

<script>
export default {
  emit: ["add-user"],
  data() {
    return {
      enteredName: "",
      enteredAge: "",
    };
  },

  methods: {
    submitData() {
      this.$emit("add-user", this.enteredName, this.enteredAge);
      this.enteredName = "";
      this.enteredAge = "";
    },
  },
};
</script>
