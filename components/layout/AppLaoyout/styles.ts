import styled from 'styled-components';

export const StyledAppLayout = styled.div`
  .header {
    position: fixed;
    background-color: white;
    z-index: 1;
    width: 100%;
  }

  .wrapper {
    border-bottom: 1px solid #ddd;
  }

  .spacer {
    height: 163px;
  }

  .content {
    max-width: 990px;
    margin: 0 auto;
    padding-top: 10px;
  }
`;
