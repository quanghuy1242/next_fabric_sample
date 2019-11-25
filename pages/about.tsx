import React, { FC } from 'react';
import Link from 'next/link';
import { PrimaryButton, Stack } from 'office-ui-fabric-react';

const About: FC = () => (
  <Stack tokens={{ childrenGap: 8 }} horizontal>
    <Link href="/">
      <PrimaryButton text="Home" />
    </Link>
  </Stack>
)

export default About;