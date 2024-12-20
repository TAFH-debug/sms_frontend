import axiosInstance from "$lib/axios";
import { error } from "@sveltejs/kit";

export const ssr = false;

export async function load() {
    try {
        const clubs = await axiosInstance.get('http://localhost:3000/clubs');
        console.log(clubs);
        return clubs;
    }
    catch (e: any) {
        console.log(e.message);
        error(404, { message: 'Error' });
    }
}