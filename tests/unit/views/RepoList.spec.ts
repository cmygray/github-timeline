import { createLocalVue, mount } from '@vue/test-utils';
import Vue from 'vue';
import Vuex from 'vuex';
import Vuetify from 'vuetify';

import RepoList from '@/views/RepoList.vue';
import { repositories } from '../__fixtures__/repositories';

Vue.use(Vuetify);

const localVue = createLocalVue();
localVue.use(Vuex);
// @ts-ignore-next-lineA
const vuetify = new Vuetify();

describe('Home.vue', () => {
  const USER_ID = 'cmygray';

  let wrapper: any;

  beforeEach(() => {
    wrapper = mount(RepoList, {
      localVue,
      store: new Vuex.Store({
        getters: {
          repositoriesByOwnerId: () => () => repositories
        }
      }),
      vuetify,
      propsData: {
        userId: USER_ID
      }
    });
  });

  it('renders as expected', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
