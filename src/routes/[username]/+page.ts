import axiosInstance from "$lib/axios";
import { error } from "@sveltejs/kit";

export const ssr = false;

export async function load({ params }: { params: any }) {
    try {
        const user = await axiosInstance.get('/users/' + params.username);
        return user;
    }
    catch (e: any) {
        console.log(e.message);
        error(404, { message: 'Not Found' });
    }
}