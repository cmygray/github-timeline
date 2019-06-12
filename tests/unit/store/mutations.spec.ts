import { mutations } from '@/store/mutations';

import { repositories } from '../__fixtures__/repositories';
import { RootState } from '@/store';

const state: RootState = { repositories: {} };

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
  })
});
