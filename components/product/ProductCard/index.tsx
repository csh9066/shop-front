import React from 'react';
import { StyledProductCard } from './styles';

type Props = {
  thumnali: string;
  title: string;
  price: number;
};

function ProductCard({ price, thumnali, title }: Props) {
  return (
    <StyledProductCard bordered={false} cover={<img src={thumnali} />}>
      <div className="title">{title}</div>
      <div className="price">{price}</div>
    </StyledProductCard>
  );
}

export default ProductCard;
