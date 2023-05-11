<template>
  <section>
    <base-card>
      <h2>Submitted Experiences</h2>
      <div>
        <base-button @click="loadExperiences"
          >Load Submitted Experiences</base-button
        >
      </div>
      <p v-if="isLoading">Loading...</p>
      <p v-else-if="!isLoading && error">{{ error }}</p>
      <p v-else-if="!isLoading && (!results || results.length === 0)">
        No stored experiences found. Start adding some survey results first.
      </p>
      <ul v-else>
        <survey-result
          v-for="result in results"
          :key="result.id"
          :name="result.name"
          :rating="result.rating"
        ></survey-result>
      </ul>
    </base-card>
  </section>
</template>

<script>
import axios from 'axios';
import SurveyResult from './SurveyResult.vue';

export default {
  components: {
    SurveyResult,
  },
  data() {
    return {
      results: [],
      isLoading: false,
      error: null,
    };
  },
  methods: {
    loadExperiences() {
      this.isLoading = true;
      this.error = null;
      axios
        .get(
          'https://vue-http-91e71-default-rtdb.asia-southeast1.firebasedatabase.app/surveys.json'
        )
        .then((res) => {
          this.isLoading = false;
          if (res.status === 200) {
            const data = res.data;
            const results = [];
            for (const id in data) {
              results.push({
                id,
                name: data[id].name,
                rating: data[id].rating,
              });
            }
            console.log(results);
            this.results = results;
          }
        })
        .catch((error) => {
          console.log(error.message);
          this.isLoading = false;
          this.error = error.message;
        });
    },
  },
  mounted() {
    this.loadExperiences();
    // 컴포넌트가 마운트될 때 데이터를 불러온다.
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>
