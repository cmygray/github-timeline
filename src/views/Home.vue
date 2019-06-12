<template>
  <v-container tag="section" class="home">
    <h1>GitHub timeline</h1>
    <form @submit.prevent="handleSubmit">
      <v-text-field
        v-model="userId"
        autofocus
        label="GitHub ID"
        placeholder="cmygray"
      />
      <v-btn
        :disabled="isLoading || !userId"
        type="submit"
        block
        color="primary"
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
  private userId: string = '';
  private isLoading: boolean = false;

  @Action('fetchRepositories')
  private fetchRepositories: (param: { userId: string }) => Promise<void>;

  private async handleSubmit() {
    this.isLoading = true;
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
    } catch (error) {
      console.log(error);
    }
    this.isLoading = false;
  }
}
</script>
