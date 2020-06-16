import React from 'react';

import { render } from '@testing-library/react';

import Link from '../src/Link';

import { screenshot } from '../';

test('Second link', () => {
  const { container, rerender } = render(<Link href="#">Facebook</Link>);
  screenshot(container);
  rerender(
    <Link href="#" inverted>
      Facebook
    </Link>,
  );
  screenshot(container);
});
