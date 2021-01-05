import { Card } from 'antd';
import styled from 'styled-components';

export const StyledProductCard = styled(Card)`
  .title {
    color: #454c53;
    font-size: 17;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    font-weight: bold;
    padding-top: 8px;
  }
  .price {
    font-size: 22px;
    font-weight: 600;
  }
`;
