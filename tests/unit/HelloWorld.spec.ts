import { shallowMount, createLocalVue } from '@vue/test-utils';

import HelloWorld from '@/components/HelloWorld.vue';

const localVue = createLocalVue();

const PROPS = {
  msg: 'hello world'
};

describe('HelloWorld.vue', () => {
  let wrapper: any;

  beforeEach(() => {
    wrapper = shallowMount(HelloWorld, {
      localVue,
      propsData: PROPS,
    });
  });

  it('renders as expected', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
