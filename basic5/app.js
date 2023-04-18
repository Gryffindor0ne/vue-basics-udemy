const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: "",
    };
  },
  computed: {
    // 메서드이지만 데이터 프로퍼티처럼 사용한다.
    fullname() {
      console.log("running....");
      if (this.name === "") {
        return "";
      }
      return this.name + " " + "Lee";
    },
  },
  methods: {
    // outputFullname() {
    //   if (this.name === "") {
    //     return "";
    //   }
    //   return this.name + " " + "Lee";
    // },
    setName(event) {
      this.name = event.target.value;
    },
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
      // this.counter--;
    },
    resetInput() {
      this.name = "";
    },
  },
});

app.mount("#events");
