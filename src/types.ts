export type ITag = {
    color: string
    id: string
    name: string
}

export type IType = {
    color: string
    id: string
    name: string
}

export type IBlogPost = {
    id: string;
    slug: string;
    cover?: string;
    title: string;
    tags?: ITag[];
    description: string;
    date: string;
    update: string;
    type?: IType[];
}

export type IPostPage = {
    post: IBlogPost,
    markdown: string
}
