import React, { FC, useState, useEffect, useMemo } from 'react';
import APIService from '../services/APIService';
import { BlogContext } from '../BlogContext';
import { Post } from '../types';
import { BlogSection } from './BlogSection';
import '../style.scss';

export const HomePage: FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    APIService.getPosts().then((downloadedPosts) => setPosts(downloadedPosts));
  }, []);

  return (
    <BlogContext.Provider value={useMemo(() => ({ posts }), [posts])}>
      <BlogSection />
    </BlogContext.Provider>
  );
};
