import { Form, Input, Radio, Select, Modal, Result } from 'antd';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import AppLayout from '../../components/layout/AppLaoyout';
import PriceInput from '../../components/product/PriceInput';
import ProductFormTemplate from '../../components/product/ProductFormTemplate';
import ProductUpload from '../../components/product/ProductUpload';
import TagsInput from '../../components/product/TagsInput';
import { CategoryTextMap } from '../../constants';
import api from '../../lib/api';
import { useAuth } from '../../lib/contexts/AuthContext';
import {
  ProductCategory,
  ProductForm,
  ProductStatus,
} from '../../types/products';

const { Option } = Select;

function ProductRegisterPage() {
  const [form] = Form.useForm<ProductForm>();
  const [loading, setLoading] = useState(false);
  const { loading: userLoading, user } = useAuth();
  const router = useRouter();
  const onFinish = async (productForm: ProductForm) => {
    setLoading(true);
    try {
      await api.post(`/products`, productForm);
      router.back();
    } catch (e) {
      if (e.response) {
        Modal.error({
          content: e.response.message,
        });
      }
    }
    setLoading(false);
  };

  return (
    <AppLayout>
      {user ? (
        <ProductFormTemplate
          type="register"
          submit={form.submit}
          loading={loading}
        >
          <Form
            labelCol={{ span: 4 }}
            labelAlign="left"
            wrapperCol={{ span: 20 }}
            form={form}
            initialValues={{ status: ProductStatus.USED }}
            onFinish={onFinish}
          >
            <Form.Item label="상품 사진" name="imgUrls">
              <ProductUpload />
            </Form.Item>
            <Form.Item label="상품 제목" name="title">
              <Input placeholder="상품 제목을 입력해주세요" />
            </Form.Item>
            <Form.Item
              label="카테고리"
              wrapperCol={{ span: 4 }}
              name="category"
            >
              <Select placeholder="카테고리">
                {Object.values(ProductCategory).map((v) => (
                  <Option key={v} value={v}>
                    {CategoryTextMap[v]}
                  </Option>
                ))}
              </Select>
            </Form.Item>
            <Form.Item label="상품설명" name="description">
              <Input.TextArea placeholder="상품 설명을 입력해주세요." />
            </Form.Item>
            <Form.Item
              label="연관태그(선택사항)"
              wrapperCol={{ span: 7 }}
              name="tags"
              rules={[{ type: 'array' }]}
            >
              <TagsInput />
            </Form.Item>
            <Form.Item
              label="상품상태"
              name="status"
              rules={[{ enum: Object.values(ProductStatus) }]}
            >
              <Radio.Group buttonStyle="solid">
                <Radio.Button value={ProductStatus.NEW}>새상품</Radio.Button>
                <Radio.Button value={ProductStatus.ALMOST_NEW}>
                  거의새것
                </Radio.Button>
                <Radio.Button value={ProductStatus.USED}>중고</Radio.Button>
              </Radio.Group>
            </Form.Item>
            <Form.Item label="상품가격" name="price" wrapperCol={{ span: 6 }}>
              <PriceInput />
            </Form.Item>
          </Form>
        </ProductFormTemplate>
      ) : (
        <Result status="403" title="권한이 없습니다" />
      )}
    </AppLayout>
  );
}

export default ProductRegisterPage;
