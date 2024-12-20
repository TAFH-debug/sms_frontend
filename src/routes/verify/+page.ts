import axiosInstance from "$lib/axios";

export const ssr = false;

export function load({ url }: { url: URL }) {
    const token = url.searchParams.get('token');
    return {
        verifyPromise: axiosInstance.patch('/verify?token=' + token)
    }
}