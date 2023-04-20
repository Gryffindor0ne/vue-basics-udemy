const app = Vue.createApp({
  data() {
    return {
      count: 0,
      message: "",
    };
  },
  computed: {
    result() {
      if (this.count < 37) {
        return "Not there yet";
      } else if (this.count > 37) {
        return "Too much!";
      } else {
        return this.count;
      }
    },
  },
  watch: {
    count() {
      const that = this;
      setTimeout(() => {
        that.count = 0;
      }, 5000);
    },
  },
  methods: {
    add(num) {
      this.count = this.count + num;
    },
  },
});

app.mount("#assignment");
