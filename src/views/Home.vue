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
      <v-btn type="submit" block color="primary">Generate</v-btn>
    </form>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Home extends Vue {
  private userId: string = '';

  private handleSubmit() {
    this.$router.push({
      name: 'repos.index',
      query: {
        userId: this.userId,
      },
    });
  }
}
</script>
