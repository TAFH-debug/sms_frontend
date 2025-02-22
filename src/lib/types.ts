type Role = {
    id: string;
    name: string;
    color: string;
    userIDs: string[];
}

type User = {
    id: string;
    email: string;
    username: string;
    name: string;
    about: string;
    isVerified: boolean;
    avatar_url: string;
    surname: string;
    roleIDs: string[];
    roles: Role[];
}

type Announcement = {
    id: string;
    content: string;
    author: User;
    createdAt: string;
}

type Post = {
    id: string;
    author: User;
    content: string;
    images: string[];
    createdAt: string;
    comments: PostComment[];
}

type PostComment = {
    id: string;
    author: User;
    content: string;
    images: string[];
    createdAt: string;
    post: Post;
}

export type { Role, User, Announcement, Post, PostComment };