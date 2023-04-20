const app = Vue.createApp({
  data() {
    return {
      myName: "Devin Lee",
      myAge: 44,
      image:
        "https://images.unsplash.com/photo-1681057574319-071be1179877?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3448&q=80",
    };
  },
  methods: {
    upperAge() {
      return this.myAge + 5;
    },
    favoriteNumber() {
      const num = Math.random();
      return num;
    },
  },
});

app.mount("#assignment");
