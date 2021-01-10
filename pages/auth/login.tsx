import { Button, Checkbox, Form, Input } from 'antd';
import { ValidateStatus } from 'antd/lib/form/FormItem';
import Link from 'next/link';
import React from 'react';
import AuthLayout from '../../components/layout/AuthLayout';

function LoginPage() {
  return (
    <AuthLayout title="로그인">
      <Form>
        <Form.Item name="email">
          <Input size="large" placeholder="아이디(이메일)" />
        </Form.Item>
        <Form.Item name="password">
          <Input.Password size="large" placeholder="비밀번호" />
        </Form.Item>
        <Form.Item>
          <Checkbox>아이디 저장</Checkbox>
        </Form.Item>
        <Form.Item>
          <Button
            type="primary"
            block
            size="large"
            style={{ height: 57 }}
            htmlType="submit"
          >
            로그인
          </Button>
          <div
            style={{
              textAlign: 'center',
              marginTop: 30,
            }}
          >
            처음이신가요?
            <Link href="/auth/join">
              <a>회원가입</a>
            </Link>
          </div>
        </Form.Item>
      </Form>
    </AuthLayout>
  );
}

export default LoginPage;
