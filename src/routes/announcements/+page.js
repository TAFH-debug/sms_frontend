import axiosInstance from "$lib/axios"

export const ssr = false;

export const load = () => {
    const promise = axiosInstance.get("/announcements");

    return {
        announcements: promise
    }
}