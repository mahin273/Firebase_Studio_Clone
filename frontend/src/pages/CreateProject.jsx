import { useCreateProject } from "../hooks/apis/mutations/useCreateProject";
import { Button, Layout,Row,Col,Flex } from "antd";







export const CreateProject = () => {
  const { Header, Footer, Content } = Layout



  const {createProjectMutation ,isPending} = useCreateProject();
  async function handleCreateProject() {
    console.log("Going to tigger the api");
    try {
      await createProjectMutation();
      console.log("Now we should redirect to the editor")

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
