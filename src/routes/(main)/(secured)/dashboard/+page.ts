import axiosInstance from "$lib/axios";

export async function load() {
    const channels = await axiosInstance.get('/channels');
    return {
        channels: channels.data
    }
}