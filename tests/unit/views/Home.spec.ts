import { createLocalVue, mount } from '@vue/test-utils';
import Vue from 'vue';
import Vuex from 'vuex';
import Vuetify from 'vuetify';

import Home from '@/views/Home.vue';
import { repositories } from '../__fixtures__/repositories';

Vue.use(Vuetify);

const localVue = createLocalVue();
localVue.use(Vuex);
// @ts-ignore-next-line
const vuetify = new Vuetify();

describe('Home.vue', () => {
  let wrapper: any;

  beforeEach(() => {
    wrapper = mount(Home, {
      localVue,
      vuetify
    });
  });

  it('renders as expected', () => {
    expect(wrapper).toMatchSnapshot();
  });

  describe('input', () => {
    let input: any;

    beforeEach(function() {
     input = wrapper.find('input');
    });

    it('should have empty string as default value', function() {
      expect(input.element.value).toEqual('')
    });

    it('should show and change userId data', function() {
      wrapper.setData({ userId: 'foo' });

      expect(input.element.value).toEqual('foo');

      input.setValue('bar');

      expect(wrapper.vm.userId).toEqual('bar');
    });
  });

  describe('#handleSubmit', () => {
    const USER_ID = 'cmygray';
    const NEXT_ROUTE_NAME = 'repos.index';
    const MAPPED_ACTION = 'fetchRepositories';

    beforeEach(function() {
      wrapper = mount(Home, {
        localVue,
        store: new Vuex.Store({
          actions: {
            fetchRepositories: jest.fn().mockResolvedValueOnce(repositories)
          }
        }),
        vuetify,
        data: () => ({
          userId: USER_ID
        }),
        mocks: {
          $router: {
            push: jest.fn()
          },
        }
      })
    });

    it('should fetch repositories using mapped action', async () => {
      jest.spyOn(wrapper.vm.$store, 'dispatch');

      await wrapper.vm.handleSubmit();

      expect(wrapper.vm.$store.dispatch).toBeCalledWith(
        MAPPED_ACTION,
        { userId: USER_ID }
      )
    });

    it('should push new route and query string to router', async () => {
      await wrapper.vm.handleSubmit();

      expect(wrapper.vm.$router.push).toBeCalledWith({
        name: NEXT_ROUTE_NAME,
        query: { userId: USER_ID }
      })
    });
  });
});
