import { FC } from 'react';
import { Col, Card, Link } from '@canonical/react-components';
import { Post } from '../../types';
import './PostCard.scss';

export const PostCard: FC<{ post: Post }> = ({ post }) => {
  const { id, postImgSrc, postArticleName, postUrl, author, authorUrl, date } =
    post;

  const postImgDesc = `image for ${postArticleName}`;
  const postTitle = 'Cloud and server';
  const postType = 'Article';

  return (
    <Col size={4} medium={2} id={id} className="parent--positioned">
      <Card className="highlight--cloud-and-server" title={postTitle}>
        <Link
          href={postUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-describedby="this link will open in a new tab or window"
        >
          <img className="p-card-image" src={postImgSrc} alt={postImgDesc} />
        </Link>
        <h4>
          <Link
            href={postUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-describedby="this link will open in a new tab or window"
          >
            {postArticleName}
          </Link>
        </h4>
        <p className="p-card__content-text">
          {/* <em> */}
          by{' '}
          <Link
            href={authorUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-describedby="this link will open in a new tab or window"
          >
            {author}
          </Link>{' '}
          on {date}
          {/* </em> */}
        </p>
        <p className="p-card__footer">{postType}</p>
      </Card>
    </Col>
  );
};
