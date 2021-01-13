import { Button, Checkbox, Form, Input, Modal } from 'antd';
import axios from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import AuthLayout from '../../components/layout/AuthLayout';
import { API_URL, JWT_LOGIN_TOKEN, ValidateMessages } from '../../constants';
import { useUser } from '../../lib/contexts/UserContext';

function LoginPage() {
  const router = useRouter();
  const [form] = Form.useForm();
  const [user, setUser] = useUser();
  const [emailSaveCheck, setEmailSaveCheck] = useState();

  const onChangeEmailSaveCheck = (e) => {
    setEmailSaveCheck(e.target.checked);
  };

  const onLogin = async (form) => {
    try {
      if (emailSaveCheck) {
        localStorage.setItem('email', form.email);
      } else {
        localStorage.removeItem('email');
      }

      const { data } = await axios.post(`${API_URL}/auth/login`, form);
      setUser(data.user);
      localStorage.setItem(JWT_LOGIN_TOKEN, data.token);
      Modal.info({
        content: '로그인 성공',
        onOk: () => {
          router.push('/');
        },
      });
    } catch (e) {
      const res = e.response;
      if (res) {
        Modal.error({
          content: res.data.message,
        });
      }
    }
  };

  useEffect(() => {
    const email = localStorage.getItem('email');
    if (email) {
      form.setFieldsValue({ email });
      setEmailSaveCheck(true);
    }
  }, []);

  return (
    <AuthLayout title="로그인">
      <Form onFinish={onLogin} validateMessages={ValidateMessages} form={form}>
        <Form.Item name="email" rules={[{ required: true }, { type: 'email' }]}>
          <Input size="large" placeholder="아이디(이메일)" />
        </Form.Item>
        <Form.Item name="password" rules={[{ required: true }]}>
          <Input.Password size="large" placeholder="비밀번호" />
        </Form.Item>
        <Form.Item>
          <Checkbox onChange={onChangeEmailSaveCheck} checked={emailSaveCheck}>
            아이디 저장
          </Checkbox>
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
