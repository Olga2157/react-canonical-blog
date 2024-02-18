import { FC } from 'react';
import { Row, Strip } from '@canonical/react-components';
import { useBlogContext } from '../BlogContext';
import { PostCard } from './Card/PostCard';

export const BlogSection: FC = () => {
  const { posts } = useBlogContext();

  return (
    <Strip shallow id="posts-list">
      <Row className="u-equal-hight u-clearfix overflow--visible">
        {posts.map((downloadedPost) => (
          <PostCard key={downloadedPost.id} post={downloadedPost} />
        ))}
      </Row>
    </Strip>
  );
};
