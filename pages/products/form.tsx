import { Form, Input, Radio, Select, Upload, Tag } from 'antd';
import React, { useState } from 'react';
import AppLayout from '../../components/layout/AppLaoyout';
import PriceInput from '../../components/product/PriceInput';
import ProductFormTemplate from '../../components/product/ProductFormTemplate';
import TagsInput from '../../components/product/TagsInput';
import { CategoryTextMap } from '../../constants';
import {
  ProductCategory,
  ProductForm,
  ProductStatus,
} from '../../types/products';

const { Option } = Select;

function ProductRegisterPage() {
  const [form] = Form.useForm();

  const onFinish = (productForm: ProductForm) => {
    console.log(productForm);
  };

  return (
    <AppLayout>
      <ProductFormTemplate type="register" submit={form.submit}>
        <Form
          labelCol={{ span: 4 }}
          labelAlign="left"
          wrapperCol={{ span: 20 }}
          form={form}
          initialValues={{ status: ProductStatus.USED, tags: [] }}
          onFinish={onFinish}
        >
          <Form.Item label="상품 사진" name="images">
            <Upload listType="picture-card">
              <img
                src="https://ccimage.hellomarket.com/web/2018/auto/img_car_pic_basic.png"
                style={{
                  width: '100%',
                  height: '100%',
                }}
              />
            </Upload>
          </Form.Item>
          <Form.Item label="상품 제목" name="title">
            <Input placeholder="상품 제목을 입력해주세요" />
          </Form.Item>
          <Form.Item
            label="카테고리"
            wrapperCol={{ span: 4 }}
            name="category"
            rules={[{ enum: ['asd'], message: 'asd' }]}
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
    </AppLayout>
  );
}

export default ProductRegisterPage;
