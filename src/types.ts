export type ITag = {
    color: string
    id: string
    name: string
}

export type IBlogPost = {
    id: string;
    slug: string;
    cover: string;
    title: string;
    tags: ITag[];
    description: string;
    date: string
}

export type IPostPage = {
    post: IBlogPost,
    markdown: string
}
