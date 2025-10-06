import { useQuery } from "@tanstack/react-query";
import { getProjectTree } from "../../../apis/projects";

export const useProjectTree = (projectId) => {
  const { isLoading,isError,data:projctTree,error}=useQuery({
    queryFn:()=>getProjectTree({projectId})
  })
  return {
    isLoading,
    isError,
    projctTree,
    error
  }
}
