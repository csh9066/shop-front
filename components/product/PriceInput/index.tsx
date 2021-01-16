import { Input } from 'antd';
import React, { useState } from 'react';

type props = {
  onChange?: (value: number) => void;
};

function PriceInput({ onChange }: props) {
  const [price, setPrice] = useState<string>('');

  const triggerChange = (changedValue: number) => {
    if (onChange) {
      onChange(changedValue);
    }
  };

  const onChangePrice = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newPrice = removePriceComma(e.target.value);
    const numberNewPrice = parseInt(newPrice || '0', 10);

    if (Number.isNaN(numberNewPrice) || numberNewPrice > MAX_PRICE) {
      return;
    }

    setPrice(addPriceComma(newPrice));
    triggerChange(numberNewPrice);
  };

  return (
    <>
      <Input
        value={price}
        onChange={onChangePrice}
        placeholder="가격을 입력해주세요"
        addonAfter="원"
      />
    </>
  );
}

const removePriceComma = (str: string) => {
  return str.replace(/,/g, '');
};

const addPriceComma = (str: string) => {
  return str.replace(/(\d)(?=(?:\d{3})+(?!\d))/g, '$1,');
};

// 9천
const MAX_PRICE = 99999999;

export default PriceInput;
