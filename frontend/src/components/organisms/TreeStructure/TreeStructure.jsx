import { TreeNode } from "../../molecules/TreeNode/TreeNode";
import { useTreeStructureStore } from "../../../store/treeStructureStore";
import { useEffect } from "react";

export const TreeStructure = () => {
  const { treeStructure, setTreeStructure } = useTreeStructureStore();

  useEffect(() => {
    if (treeStructure) {
      console.log("Tree: ",treeStructure)
    } else {
      setTreeStructure();
    }

  }, [setTreeStructure,treeStructure])

  return (
    <div>
      
      <TreeNode fileFolderData={ treeStructure } />

    </div>
  )


}
