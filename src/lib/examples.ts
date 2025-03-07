import type { Post, Role, User } from "./types";

export const role: Role = {
    id: "id",
    name: "Role",
    color: "#fff",
    userIDs: [],
    permissions: []
};

export const user: User = {
    id: "id",
    email: "example@gmail.com",
    username: "johndoe",
    name: "John",
    about: "Example user used for samples.",
    isVerified: false,
    avatar_url: "",
    surname: "Doe",
    roleIDs: [],
    roles: [],
};

export const post: Post = {
    id: "id",
    author: user,
    content: "Some interesting content that will be shown on every feed.",
    images: [],
    createdAt: "25.02.2025",
    comments: [],
}