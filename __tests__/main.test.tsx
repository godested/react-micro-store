import React from 'react';
import renderer from 'react-test-renderer';
import { useMicroStore, MicroStoreProvider } from '../src';

function MockComponent() {
  const { foo } = useMicroStore(state => ({ foo: state.foo }));

  return <div>{foo}</div>;
}

it('should call useMicroStoreHook', () => {
  const component = renderer.create(
    <MicroStoreProvider initialState={{ foo: 'foo' }}>
      <MockComponent />
    </MicroStoreProvider>
  );

  const tree = component.toJSON();

  expect(tree).toMatchSnapshot();
});
