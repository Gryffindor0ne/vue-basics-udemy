const app = Vue.createApp({
  data() {
    return {
      tasks: [],
      inputTask: "",
      visible: true,
    };
  },
  computed: {
    selectCaption() {
      if (this.visible) {
        return "Hide List";
      } else {
        return "Show List";
      }
    },
  },
  methods: {
    setVisible() {
      this.visible = !this.visible;
    },
    addTask() {
      this.tasks.push(this.inputTask);
    },
  },
});

app.mount("#assignment");
