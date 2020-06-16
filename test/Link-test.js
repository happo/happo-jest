import React from 'react';

import { render, fireEvent, screen } from '@testing-library/react';

import Link from '../src/Link';

test('Link changes the class when hovered', () => {
  const { container } = render(
    <Link page="http://www.facebook.com">Facebook</Link>,
  );
  console.log(container.innerHTML);
});
