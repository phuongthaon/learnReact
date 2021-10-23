import "antd/dist/antd.css";
import { Layout, Menu } from "antd";
import { FileOutlined } from "@ant-design/icons";
import React from "react";
import "./ProjectMaster.scss";
import ProjectTableContent from "./ProjectTableContent";

const { Header, Content, Sider } = Layout;

function ProjectMaster() {
  const [collapsed, setCollapsed] = React.useState(false);
  const handleOnCollapsed = React.useCallback(() => {
    setCollapsed(!collapsed);
  }, [collapsed]);
  return (
    <div className="page">
      <Layout style={{ minHeight: "100vh" }}>
        <Sider collapsible collapsed={collapsed} onCollapse={handleOnCollapsed}>
          <div className="logo-2">
            <div className="font-weight-700 font-size-16">Structural Buddy</div>
          </div>
          <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
            <Menu.Item key="1" icon={<FileOutlined />}>
              Projects
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }} />
          <Content style={{ margin: "16px" }}>
            <div
              className="site-layout-background text-align-center"
              style={{ padding: 24, minHeight: "100vh" }}
            >
              <ProjectTableContent />
            </div>
          </Content>
        </Layout>
      </Layout>
    </div>
  );
}
export default ProjectMaster;
