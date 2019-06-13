import { mutations } from '@/store/mutations';

import { repositories } from '../__fixtures__/repositories';
import { RootState } from '@/store';

const state: RootState = { pagination: {}, repositories: {} };

describe('mutations', () => {
  describe('SET_REPOSITORIES', () => {
    const PAYLOAD = {
      ownerId: 'cmygray',
      repositories: repositories
    };
    it('sets repositories of an owner', () => {
      mutations.SET_REPOSITORIES(state, PAYLOAD);

      expect(state).toMatchSnapshot();
      expect(state.repositories[PAYLOAD.ownerId]).toEqual(PAYLOAD.repositories)
    });
  });

  describe('SET_PAGINATION', () => {
    const PAYLOAD = {
      totalCount: 100,
      pageInfo: {
        endCursor: 'last-repo-id',
        hasNextPage: true
      }
    };

    it('should sets pagination', () => {
      mutations.SET_PAGINATION(state, PAYLOAD);

      expect(state).toMatchSnapshot();
      expect(state.pagination).toEqual(expect.objectContaining({
        totalCount: PAYLOAD.totalCount,
        ...PAYLOAD.pageInfo
      }))
    })
  })
});
