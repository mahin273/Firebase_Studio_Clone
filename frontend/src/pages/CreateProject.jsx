import { useNavigate } from "react-router-dom";
import { useCreateProject } from "../hooks/apis/mutations/useCreateProject";
import { Button, Layout,Row,Col,Flex } from "antd";
export const CreateProject = () => {
  const { Header, Footer, Content } = Layout
  const { createProjectMutation, isPending } = useCreateProject();
  const navigator = useNavigate();
  async function handleCreateProject() {
    console.log("Going to tigger the api");
    try {
      const response=await createProjectMutation();
      console.log("Now we should redirect to the editor")
      navigator(`/project/${response.data}`)

    } catch (error) {
      console.log("Error creating project",error)

    }


  }

  return (
    <Row>
      <Col span={12} offset={6} style={{ marginTop: 100 }}>
        <Flex justify="center" align="center">
          <Button type="primary" size="large" onClick={handleCreateProject} loading={isPending}>
            Create New Project
          </Button>
        </Flex>
        </Col>

    </Row>
  )
  }
