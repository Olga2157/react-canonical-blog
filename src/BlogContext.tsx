import { createContext, useContext } from 'react';
import { BlogContent } from './types';

export const BlogContext = createContext<BlogContent>({
  posts: [],
});
export const useBlogContext = () => useContext(BlogContext);
