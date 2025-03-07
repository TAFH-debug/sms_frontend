import type { Timestamp } from "firebase/firestore";

type Role = {
    id: string;
    name: string;
    color: string;
    userIDs: string[];
    permissions: string[];
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
    roles: Role[] | undefined;
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
    comments: PostComment[] | undefined;
}

type Message = {
    content: string;
    username: string;
    date: Timestamp;
};

type PostComment = {
    id: string;
    author: User;
    content: string;
    images: string[];
    createdAt: string;
    post: Post;
}

type Channel = {
    path: string;
    name: string;
    users: User[] | undefined;
}

export type { Channel, Message, Role, User, Announcement, Post, PostComment };