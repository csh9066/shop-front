import { SmileOutlined } from '@ant-design/icons';
import { Button, Result } from 'antd';
import Link from 'next/link';
import React from 'react';
import AppLayout from '../components/layout/AppLaoyout';

function HelloPage() {
  return (
    <AppLayout>
      <Result
        icon={<SmileOutlined />}
        title="헬로우마켓에 오신걸 환영합니다!"
        extra={
          <Button size="large" type="primary">
            <Link href="/auth/login">
              <a>로그인</a>
            </Link>
          </Button>
        }
      />
    </AppLayout>
  );
}

export default HelloPage;
