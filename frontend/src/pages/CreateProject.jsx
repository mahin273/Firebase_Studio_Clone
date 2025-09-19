import { useCreateProject } from "../hooks/apis/mutations/useCreateProject";
import { Button, Layout } from "antd";


  const layoutStyle = {
    borderRadious: 8,
    overflow: 'hidden',
    width: 'calc(50% -8px)',
    maxWidth: 'calc(50%-8px)',
  };

  const headerStyle = {
    color: '#fff',
    backgroundColor: '#7dbcea',
    textAlign: 'center',
    height: 64,
    paddingInline: 50,
    lineHeight: '64px',
  };

  const contentStyle = {
    textAlign: 'center',
    minHeight: 120,
    lineHeight: '120px',
    color: '#fff',
    backgroundColor: '#c45ba1ff',
  };

  const footerStyle = {
    textAlign: 'center',
    color: '#fff',
    backgroundColor: '#7dbcea',
  };



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
    <Layout style={layoutStyle}>
      <Header style={headerStyle}>
        <h1>Create Project</h1>
      </Header>
      <Content style={contentStyle}>
        <Button type="primary" onClick={handleCreateProject} loading={isPending}>Create Playground</Button>
      </Content>
      <Footer style={footerStyle}>
        Footer
      </Footer>
    </Layout>
  )
  }
