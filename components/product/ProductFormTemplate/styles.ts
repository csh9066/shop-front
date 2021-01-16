import styled from 'styled-components';

export const StyledProductFormTemplate = styled.div`
  .wrapper {
    border: 1px solid #ddd;
  }

  .title {
    font-size: 20px;
    border-bottom: 1px solid #ddd;
    height: 64px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .form {
    margin: 60px 97px 60px 71px;

    textarea {
      height: 168px;
    }

    .ant-input-group-addon {
      border: none;
      background-color: white;
    }
  }

  .buttons {
    height: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
    button {
      height: 64px;
      width: 177px;
    }

    button + button {
      margin-left: 24px;
    }
  }
`;
