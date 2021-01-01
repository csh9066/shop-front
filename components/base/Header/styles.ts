import styled from 'styled-components';

export const StyledHeader = styled.header`
  max-width: 990px;
  height: 110px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  .logo {
    flex-basis: 180px;
    .logo-img {
      width: 115px;
    }
  }

  .search {
    flex: 1;
  }

  .noti {
    flex-basis: 108px;
    margin-left: 48px;
    img {
      margin-left: 18px;
      width: 20px;
    }
  }

  .user-nav {
    cursor: pointer;
    .nick {
      margin-left: 8px;
    }
  }

  .auth-btns {
    flex-basis: 300px;
    display: flex;
    justify-content: flex-end;

    a {
      padding: 10px;
      color: black;
    }
  }
`;
