import { Button, Col, Form, Input, Row } from 'antd';
import Link from 'next/link';
import React from 'react';
import AuthLayout from '../../components/layout/AuthLayout';

function JoinPage() {
  const [form] = Form.useForm();

  return (
    <AuthLayout title="회원가입">
      <Form form={form} layout="vertical">
        <Form.Item label="아이디(이메일)" name="email" required>
          <Input placeholder="이메일 주소입력" size="large" />
        </Form.Item>
        <Form.Item label="비밀번호" name="password" required>
          <Input.Password
            placeholder="영문, 숫자, 특수문자 포함 6~15자"
            size="large"
          />
        </Form.Item>
        <Form.Item label="비밀번호 확인" name="passwordCheck" required>
          <Input.Password placeholder="비밀번호 확인" size="large" />
        </Form.Item>
        <Form.Item label="닉네임" name="nickname" required>
          <Input placeholder="닉네임" size="large" />
        </Form.Item>
        <Form.Item>
          <Button
            type="primary"
            block
            size="large"
            style={{ height: 57 }}
            htmlType="submit"
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
