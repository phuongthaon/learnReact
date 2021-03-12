import React, { useState } from "react";
import Master from "../Master/Master";
import "./Frame.scss";
import { Layout, Menu, Breadcrumb } from "antd";
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";
import Create from "../Create/Create";

function Frame() {
  const { Header, Content, Footer, Sider } = Layout;
  const { SubMenu } = Menu;
  const [state, setState] = useState(false);
  // const { collapsed } = state;
  const onCollapse = () => {
    setState(!state);
  };

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider
        theme="light"
        collapsible
        collapsed={state}
        onCollapse={onCollapse}
        width="200px"
      >
        <div className="logo" />
        <Menu theme="light" defaultSelectedKeys={["1"]} mode="inline">
          <Menu.Item key="1" icon={<PieChartOutlined />}>
            Dashboard
          </Menu.Item>
          <Menu.Item key="2" icon={<DesktopOutlined />}>
            CỦA TÔI
          </Menu.Item>
          <SubMenu
            key="sub1"
            icon={<UserOutlined />}
            title="ĐỀ NGHỊ THANH TOÁN "
          >
            <Menu.Item key="3">Tom</Menu.Item>
            <Menu.Item key="4">Bill</Menu.Item>
            <Menu.Item key="5">Alex</Menu.Item>
          </SubMenu>
          <SubMenu key="sub2" icon={<TeamOutlined />} title="TẠM ỨNG">
            <Menu.Item key="6">Team 1</Menu.Item>
            <Menu.Item key="8">Team 2</Menu.Item>
          </SubMenu>
          <Menu.Item key="9" icon={<FileOutlined />}>
            THANH TOÁN TRẢ TRƯỚC
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0 }} />
        <Content style={{ margin: "0 16px" }}>
          <Breadcrumb style={{ margin: "16px 0" }}>
            <Breadcrumb.Item>User</Breadcrumb.Item>
            <Breadcrumb.Item>Bill</Breadcrumb.Item>
          </Breadcrumb>
          <div
            className="site-layout-background"
            style={{ padding: 24, minHeight: 360 }}
          >
            TẤT CẢ SẢN PHẨM
            <Master />
          </div>
        </Content>
      </Layout>
    </Layout>
  );
}

export default Frame;
