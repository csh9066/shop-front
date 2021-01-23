import { Upload } from 'antd';
import React from 'react';
import { API_URL } from '../../../constants';

type props = {
  onChange?: (value: string[]) => void;
  value?: string[];
};

function ProductUpload({ onChange, value = [] }: props) {
  return (
    <Upload
      listType="picture-card"
      action={`${API_URL}/upload`}
      name="img"
      onChange={({ file }) => {
        if (file.status === 'done') {
          onChange([...value, file.response.src]);
        }
      }}
    >
      <img
        src="https://ccimage.hellomarket.com/web/2018/auto/img_car_pic_basic.png"
        style={{
          width: '100%',
          height: '100%',
        }}
      />
    </Upload>
  );
}

export default ProductUpload;
