<template>
  <v-container tag="section" class="home">
    <v-snackbar :value="errorMessage" color="error" top>
      {{ errorMessage }}
      <v-btn text @click="errorMessage = ''">
        Close
      </v-btn>
    </v-snackbar>

    <h1>GitHub timeline</h1>
    <form @submit.prevent="handleSubmit">
      <v-text-field
        v-model="userId"
        autofocus
        label="GitHub ID"
        placeholder="cmygray"
      />
      <v-btn :disabled="!userId" type="submit" block color="primary"
        >Generate</v-btn
      >
    </form>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { Action } from 'vuex-class';

@Component
export default class Home extends Vue {
  userId: string = '';
  errorMessage: string = '';

  @Action('fetchRepositories')
  fetchRepositories: (param: { userId: string }) => Promise<void>;

  async handleSubmit() {
    try {
      await this.fetchRepositories({
        userId: this.userId,
      });
      this.$router.push({
        name: 'repos.index',
        query: {
          userId: this.userId,
        },
      });
    } catch (e) {
      this.errorMessage = e.message;
    }
  }
}
</script>
