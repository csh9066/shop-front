import { Button } from 'antd';
import Link from 'next/link';
import React from 'react';
import { StyledProductFormTemplate } from './styles';

type props = {
  children: React.ReactNode;
  type: 'register' | 'update';
  submit: any;
  loading?: boolean;
};

function ProductFormTemplate({ children, type, submit, loading }: props) {
  return (
    <StyledProductFormTemplate>
      <div className="wrapper">
        <div className="title">
          {type === 'register' ? '상품 등록' : '상품 수정'}
        </div>
        <div className="form">{children}</div>
      </div>
      <div className="buttons">
        <Button>
          <Link href="/">
            <a>취소</a>
          </Link>
        </Button>
        <Button type="primary" onClick={submit} loading={loading}>
          {type === 'register' ? '등록 완료' : '수정 완료'}
        </Button>
      </div>
    </StyledProductFormTemplate>
  );
}

export default ProductFormTemplate;
