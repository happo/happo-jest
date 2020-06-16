import React from 'react';

import renderer from 'react-test-renderer';

import Link from '../src/Link';

test('Link changes the class when hovered', () => {
  const component = renderer.create(
    <Link page="http://www.facebook.com">Facebook</Link>,
  );
  console.log('TREE', component.toTree());
  console.log('document html', document.body.innerHTML);
});
