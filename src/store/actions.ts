import { ActionTree } from 'vuex';

import { RootState } from '@/store/index';
import {
  Repository,
  UserRepositoriesData,
  UserRepositoriesVariable,
} from '@/models';
import { client, USER_REPOSITORIES_QUERY } from '@/apis';

export const actions: ActionTree<RootState, RootState> = {
  async fetchRepositories({ dispatch }, { userId }): Promise<Repository[]> {
    const { data } = await client.query<
      /* eslint-disable @typescript-eslint/indent */
      UserRepositoriesData,
      UserRepositoriesVariable
      /* eslint-enable @typescript-eslint/indent */
    >({
      variables: { userId },
      query: USER_REPOSITORIES_QUERY,
    });

    if (!data.user) throw new Error('User is not found');

    const {
      user: {
        repositories: { totalCount, pageInfo },
      },
    } = data;

    await dispatch('setPagination', { totalCount, pageInfo });

    return dispatch('setRepositories', data);
  },

  async setPagination({ commit }, { totalCount, pageInfo }): Promise<void> {
    commit('SET_PAGINATION', {
      totalCount,
      pageInfo,
    });
  },

  async setRepositories(
    { commit },
    { user: { login, repositories } }
  ): Promise<Repository[]> {
    commit('SET_REPOSITORIES', {
      ownerId: login,
      repositories: repositories.nodes,
    });

    return repositories.nodes;
  },
};
