import { Button, Form, Input, Modal } from 'antd';
import axios from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import AuthLayout from '../../components/layout/AuthLayout';
import { API_URL, ValidateMessages } from '../../constants';

function JoinPage() {
  const route = useRouter();
  const [loading, setLoading] = useState(false);

  const onJoin = async (form) => {
    setLoading(true);
    try {
      await axios.post(`${API_URL}/auth/join`, form);
      Modal.info({
        content: '이메일을 확인 해주세요',
        onOk: () => {
          route.push('/');
        },
      });
    } catch (e) {
      const res = e.response;
      if (res) {
        Modal.error({
          content: res.data.message,
        });
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthLayout title="회원가입">
      <Form
        layout="vertical"
        validateMessages={ValidateMessages}
        onFinish={onJoin}
      >
        <Form.Item
          label="아이디(이메일)"
          name="email"
          rules={[{ required: true }, { type: 'email' }]}
        >
          <Input placeholder="이메일 주소입력" size="large" />
        </Form.Item>
        <Form.Item
          label="비밀번호"
          name="password"
          rules={[
            { required: true },
            {
              validator: (_, value: string) => {
                if (!value || /^[\w | $@$!%*#?&]{8,16}$/.test(value)) {
                  return Promise.resolve();
                }
                return Promise.reject('비밀번호는 6-15자로 입력해주세요.');
              },
            },
          ]}
        >
          <Input.Password
            placeholder="영문, 숫자, 특수문자 포함 8~15자"
            size="large"
          />
        </Form.Item>
        <Form.Item
          label="비밀번호 확인"
          name="passwordCheck"
          dependencies={['password']}
          rules={[
            { required: true },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue('password') === value) {
                  return Promise.resolve();
                }
                return Promise.reject('비밀번호가 일치하지 않습니다.');
              },
            }),
          ]}
        >
          <Input.Password placeholder="비밀번호 확인" size="large" />
        </Form.Item>
        <Form.Item
          label="닉네임"
          name="nickname"
          rules={[
            { required: true },
            { min: 2, max: 16, message: '닉네임은 2-16자로 입력해주세요' },
          ]}
        >
          <Input placeholder="닉네임" size="large" />
        </Form.Item>
        <Form.Item>
          <Button
            type="primary"
            block
            size="large"
            style={{ height: 57 }}
            htmlType="submit"
            loading={loading}
          >
            이메일로 회원가입 하기
          </Button>
        </Form.Item>
        <Form.Item>
          <Button type="link" block size="large" style={{ height: 57 }}>
            <Link href="/auth/login">
              <a>로그인</a>
            </Link>
          </Button>
        </Form.Item>
      </Form>
    </AuthLayout>
  );
}

export default JoinPage;
