export type PostResponse = {
  id: string;
  featured_media: string;
  title: {
    rendered: string;
  };
  link: string;
  _embedded: {
    author: author[];
  };
  date: Date;
};

export type author = {
  name: string;
  url: string;
};

export type Post = {
  id: string;
  postImgSrc: string;
  postArticleName: string;
  postUrl: string;
  author: string;
  authorUrl: string;
  date: string;
};

export type BlogContent = {
  posts: Post[];
};
