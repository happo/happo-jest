// Link.react.js
import React from 'react';
import styled from 'styled-components';

const StyledAnchor = styled.a(({ inverted }) => ({
  color: inverted ? 'white' : 'black',
  backgroundColor: inverted ? 'black' : 'white',
}));

export default function Link({ inverted, children }) {
  return (
    <StyledAnchor inverted={inverted} href="#">
      {children}
    </StyledAnchor>
  );
}
