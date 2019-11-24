import React, { FC } from 'react';
import { useRouter } from 'next/router';
import { Text } from 'office-ui-fabric-react';

const PostDetail: FC = () => {
  const router = useRouter();
  const { postId } = router.query;

  return (
    <Text variant="large">{postId}</Text>
  );
}

export default PostDetail;