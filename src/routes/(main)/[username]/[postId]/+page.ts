import axiosInstance from "$lib/axios"

export const ssr = false;

export const load = async ({ params }) => {
    const { postId } = params;
    console.log(postId);
    const promise = axiosInstance.get(`/post/${postId}`);

    return {
        post: promise
        // comments: promise
    }
}