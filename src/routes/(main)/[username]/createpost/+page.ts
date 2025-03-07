import axiosInstance from "$lib/axios";
export const ssr = false;

export const load = async ({ request }) => {
  try {
    
  } catch (error: any) {
    return {
      status: error.response?.status,
    };
  }
};
