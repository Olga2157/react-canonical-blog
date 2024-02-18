import { Post, PostResponse } from "../types";
import { format } from 'date-fns';

export default {
  getPosts: async(): Promise<Post[]> => {

    const response = await fetch(
      "https://people.canonical.com/~anthonydillon/wp-json/wp/v2/posts.json"
    );
    let posts : Post[] = [];
    if (response.ok) {
      const postsReponse = await response.json() as PostResponse[];
      postsReponse.forEach((post) => {
          let newPost = {
            id: post.id,
            postImgSrc: post.featured_media,
            postArticleName: post.title.rendered,
            postUrl: post.link,
            author: post._embedded.author[0].name,
            authorUrl: post._embedded.author[0].url,
            date: format(post.date, 'd MMMM yyyy'),
          } as Post;
          posts.push(newPost);
      })
      return posts;
    } 
    else {
    return [];
  }
  },
};
