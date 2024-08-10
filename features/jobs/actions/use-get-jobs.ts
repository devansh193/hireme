import { useQuery } from "@tanstack/react-query";
import { fetchActiveJobs } from "@/actions/job";


export const useGetJobs = () => {
  const query = useQuery({
    queryKey: ["jobs"],
    queryFn: async () => {
      const response = await fetchActiveJobs(); 
      if (response.status === "error") {
        throw new Error(response.message);
      }
      return response.data;
    },
  });
  return query;
};
