import { GetterTree } from 'vuex';

import { RootState } from '@/store/index';
import { Repository } from '@/models';

export const getters: GetterTree<RootState, RootState> = {
  repositoriesByOwnerId: (
    state: RootState
  ): ((ownerId: string) => Repository[]) => (ownerId: string): Repository[] => {
    return state.repositories[ownerId] || [];
  },
};
