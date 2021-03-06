import Vue from 'vue';
import { MutationTree } from 'vuex';

import { RootState } from '@/store/index';

export const mutations: MutationTree<RootState> = {
  SET_REPOSITORIES(state, { ownerId, repositories }): void {
    Vue.set(state.repositories, ownerId, repositories);
  },
};
