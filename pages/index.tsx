import React from 'react';
import Head from 'next/head';
import { PrimaryButton, TextField, Stack } from 'office-ui-fabric-react';

const Home = () => (
  <>
    <Head>
      <title>Home</title>
      <link rel='icon' href='/favicon.ico' />
    </Head>
    <Stack tokens={{ childrenGap: 8 }} style={{ width: 500 }}>
      <TextField label="Username" placeholder="Hãy điền tên đăng nhập" />
      <TextField type="password" label="Password" placeholder="Hãy điền mật khẩu" />
      <Stack horizontalAlign="end">
        <PrimaryButton text="Đăng nhập" />
      </Stack>
    </Stack>
  </>
)

export default Home;