<template>
  <section>
    <h2>My Friends</h2>
    <ul>
      <li></li>
    </ul>
  </section>
</template>

<script>
export default {
  data() {
    return {
      friends: [
        {
          id: "manuel",
          name: "Manuel Lorenz",
          phone: "01234 5677 454",
          email: "manuel@localhost.com",
        },
        {
          id: "julie",
          name: "Julie Wright",
          phone: "09876 2345 343",
          email: "julie@localhost.com",
        },
      ],
    };
  },
};
</script>
