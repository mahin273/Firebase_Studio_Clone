import { useParams } from "react-router-dom";
import { EditorComponent } from "../components/molecules/EditorComponent/EditorComponenet";
import { EditorButton } from "../components/atoms/EditorButton/EditorButton";

export const ProjectPlayground = () => {
  const {projectId} = useParams();
  return (
    <>
      ProjectID: {projectId}
      <EditorComponent />
      <EditorButton isActive={true}/>
      <EditorButton isActive={false} />
    </>
  );
}
