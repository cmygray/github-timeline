<template>
  <v-container tag="section" class="repo-list">
    <h1>{{ userId }}'s timeline</h1>
  </v-container>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Home extends Vue {
  @Prop()
  public userId: string;
}
</script>
