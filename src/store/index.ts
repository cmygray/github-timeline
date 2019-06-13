import Vue from 'vue';
import Vuex, { Store } from 'vuex';
import createLogger from 'vuex/dist/logger';

import { Repository } from '@/models';
import { state } from '@/store/state';
import { getters } from '@/store/getters';
import { mutations } from '@/store/mutations';
import { actions } from '@/store/actions';

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

export interface RootState {
  pagination: {
    totalCount?: number;
    endCursor?: string;
    hasNextPage?: boolean;
  };
  repositories: {
    [ownerId: string]: Repository[];
  };
}

export function createStore(): Store<RootState> {
  return new Vuex.Store<RootState>({
    state,
    getters,
    mutations,
    actions,
    plugins: debug ? [createLogger()] : [],
  });
}
