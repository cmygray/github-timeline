import { createLocalVue, mount } from '@vue/test-utils';
import Vue from 'vue';
import Vuetify from 'vuetify';

import RepoList from '@/views/RepoList.vue';

Vue.use(Vuetify);

const localVue = createLocalVue();
// @ts-ignore-next-line
const vuetify = new Vuetify();

describe('Home.vue', () => {
  const USER_ID = 'cmygray';

  let wrapper: any;

  beforeEach(() => {
    wrapper = mount(RepoList, {
      localVue,
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
