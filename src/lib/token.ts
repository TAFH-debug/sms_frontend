import type { User } from "./types";
import axiosInstance from "./axios";
import { storable } from "./storable";
import { goto } from "$app/navigation";

export const sessionUser = storable<User | null>(null);

export async function register(username: string, name: string, surname: string, password: string, email: string) {
    return axiosInstance.post(
        "/auth/register",
        {
          username,
          password,
          email,
          surname,
          name,
          firebaseId: "popa"
        }
    );
}

export async function login(username: string, password: string) {
    const res = await axiosInstance.post("/auth/login", {
        username,
        password,
    });

    const token = res.data.access_token;

    localStorage.setItem('token', token);

    const userData = (await axiosInstance.get("/users/me")).data;
    sessionUser.set(userData);
}

export async function logout() {
    sessionUser.set(null);
    localStorage.setItem('token', "");
    goto("/signin");
}
