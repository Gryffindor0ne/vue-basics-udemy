const app = Vue.createApp({
  data() {
    return {
      user: "",
      enteredUser: "",
    };
  },
  methods: {
    showAlert() {
      alert("Event Alert!");
    },
    showUser(event) {
      this.user = event.target.value;
    },
    anotherUser(event) {
      this.enteredUser = event.target.value;
    },
  },
});

app.mount("#assignment");
