const app = Vue.createApp({
  data() {
    return {
      className: "",
      show: true,
      bgColor: "",
    };
  },
  computed: {
    paraClasses() {
      return {
        user1: this.className === "user1",
        user2: this.className === "user2",
        visible: this.show,
        hidden: !this.show,
      };
    },
  },
  methods: {
    toggleClick() {
      this.show = !this.show;
    },
  },
});

app.mount("#assignment");
