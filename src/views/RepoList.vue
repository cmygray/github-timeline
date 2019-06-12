<template>
  <v-container tag="section" class="repo-list">
    <v-timeline>
      <v-timeline-item v-for="repo in repositories" :key="repo.id" small left>
        <v-card>
          <v-card-title>{{ repo.name }}</v-card-title>

          <v-card-text>
            <p>
              {{ repo.description }}
            </p>

            <v-chip class="mr-2">
              <v-icon small>star</v-icon>
              {{ repo.stargazers.totalCount }}
            </v-chip>

            <v-chip v-if="repo.isFork">
              <v-icon small>call_split</v-icon>
              Forked
            </v-chip>
          </v-card-text>
        </v-card>

        <template v-slot:opposite>{{ repo.createdAt | date }}</template>
      </v-timeline-item>
    </v-timeline>
  </v-container>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { Getter } from 'vuex-class';
import { Repository } from '@/models';

@Component
export default class Home extends Vue {
  @Prop()
  userId: string;

  @Getter('repositoriesByOwnerId')
  getRepositoriesByOwnerId: (userId: string) => Repository[];

  get repositories() {
    return this.getRepositoriesByOwnerId(this.userId);
  }
}
</script>
