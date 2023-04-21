const app = Vue.createApp({
  data() {
    return {
      currentUserInput: "",
      message: "Vue is great!",
    };
  },
  methods: {
    saveInput(event) {
      this.currentUserInput = event.target.value;
    },
    setText() {
      // this.message = this.currentUserInput;
      this.message = this.$refs.userText.value;
    },
  },
});

app.mount("#app");

const app2 = Vue.createApp({
  template: `
      <p>{{ favoriteMeal }}</p>
  `,
  data() {
    return {
      favoriteMeal: "chicken!",
    };
  },
});

app2.mount("#app2");

//...

// vue 내부 작동 원리
// js 내장 함수 proxy

const data = {
  message: "Hello!",
  longMessage: "Hello! World!",
};

const handler = {
  set(target, key, value) {
    if (key === "message") {
      target.longMessage = value + "World!@#@!#!";
    }
    target.message = value;
  },
};

const proxy = new Proxy(data, handler);

proxy.message = "Hello!!!!";

console.log(proxy.longMessage);
