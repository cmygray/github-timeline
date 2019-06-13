import { RootState } from '@/store';
import { repositories } from '../__fixtures__/repositories';
import { getters } from '@/store/getters';

describe('getters', () => {
  describe('repositoriesByOwnerId', () => {
    const OWNER_ID = 'cmygray';
    const state: RootState = {
      pagination: {},
      repositories: {
        [OWNER_ID]: repositories
      }
    };

    it('should return function which returns repositories specified by an owner id', () => {
      // @ts-ignore-next-line
      const returnedFunction = getters.repositoriesByOwnerId(state);

      expect(typeof returnedFunction).toEqual('function');
      expect(returnedFunction(OWNER_ID)).toEqual(repositories);
    });

    it('should return empty array if an incorrect owner id is given', () => {
      // @ts-ignore-next-line
      expect(getters.repositoriesByOwnerId(state)('incorrect-owner-id')).toEqual([])
    })
  })
});
