import React, { FC } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { PrimaryButton, TextField, Stack } from 'office-ui-fabric-react';

const Home: FC = () => (
  <>
    <Head>
      <title>Home</title>
    </Head>
    <Stack tokens={{ childrenGap: 8 }}>
      <Stack tokens={{ childrenGap: 8 }} style={{ width: 500 }}>
        <TextField label="Username" placeholder="Hãy điền tên đăng nhập" />
        <TextField type="password" label="Password" placeholder="Hãy điền mật khẩu" />
        <Stack horizontalAlign="end">
          <PrimaryButton text="Đăng nhập" />
        </Stack>
      </Stack>
      <Stack tokens={{ childrenGap: 8 }} horizontal>
        <Link href="/post/[postId]" as={`/post/${'introduction-infomation'}`}>
          <PrimaryButton text="Introduction" />
        </Link>
      </Stack>
    </Stack>
  </>
)

export default Home;