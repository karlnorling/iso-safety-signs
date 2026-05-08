import { SignById } from '../SignById';

describe('SignById', () => {
  it('is a Vue component object', () => {
    expect(SignById).toHaveProperty('name', 'SignById');
    expect(SignById).toHaveProperty('setup');
  });

  it('renders null for unknown id', () => {
    // setup() returns a render function; call it with unknown id
    const props = { id: 'not-a-real-sign' };
    const vnode = (SignById.setup as Function)(props, { attrs: {} })();
    expect(vnode).toBeNull();
  });
});
