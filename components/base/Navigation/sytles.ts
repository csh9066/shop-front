import styled from 'styled-components';

export const StyledNavigation = styled.div`
  height: 51px;

  max-width: 990px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .drop-down-btn {
    display: flex;
    align-items: center;
    justify-content: space-between;

    border-left: 1px solid #ddd;
    border-right: 1px solid #ddd;
    width: 180px;
    line-height: 50px;
    padding: 0 16px;
    height: 100%;
    color: #000;
    font-size: 18px;
    font-weight: 700;

    .up {
      transform: rotate(180deg);
    }

    svg {
      width: 15px;
      height: 15px;
    }
  }

  button {
    height: 100%;
    img {
      width: 22px;
      float: left;
      padding: 6px 0;
      margin: 0 12px 0 16px;
    }
    span {
      font-size: 18px;
      font-weight: 600;
      margin-right: 16px;
    }
  }
`;

export const StyledCategories = styled.ul`
  display: inline-flex;
  flex-wrap: wrap;
  border-bottom: 1px solid #e8ebed;
  border-left: 1px solid #e8ebed;
  width: 409px;

  li {
    width: 136px;
    border-right: 1px solid #e8ebed;
    height: 50px;
    display: flex;
    align-items: center;
    padding-left: 6px;
    cursor: pointer;

    :hover {
      background-color: #f5f6f7;
    }
    span {
      padding-left: 6px;
      color: #454c53;
      font-size: 12px;
    }
    img {
      width: 26px;
    }
  }
`;
