import { useParams } from "react-router-dom";
import { EditorComponent } from "../components/molecules/EditorComponent/EditorComponenet";
import { EditorButton } from "../components/atoms/EditorButton/EditorButton";
import { TreeStructure } from "../components/organisms/TreeStructure/TreeStructure";
import { useTreeStructureStore } from "../store/treeStructureStore";
import { useEffect } from "react";

export const ProjectPlayground = () => {
  const { projectId: projectIdFromUrl } = useParams();

  const { setProjectId, projectId } = useTreeStructureStore();

  useEffect(() => {
    setProjectId(projectIdFromUrl);
  }, []);
  return (
    <>
      ProjectID: {projectIdFromUrl}
      {projectId && (
        <div
          style={{
            backgroundColor: '#0a3354',
            paddingRight: '10px',
            paddingTop: '0.3vh',
            minWidth: '250px',
            maxWidth: '25%',
            height: '99.7vh',
            overflowY: 'auto',
          }}
        >
          <TreeStructure />
        </div>
      )}
      <EditorComponent />
      <EditorButton isActive={true} />
      <EditorButton isActive={false} />
    </>
  );
}
