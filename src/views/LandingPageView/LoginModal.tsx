/* begin general import */
import "./LandingPage.scss";
import { Form, Input, Modal, ModalProps } from "antd";
import React from "react";
import { Link } from "react-router-dom";

function LoginModal(props: ModalProps) {
  const { visible } = props;
  const onFinish = (values: any) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="">
      <Modal title="Đăng nhập" visible={visible} footer={false}>
        <Form
          name="basic"
          wrapperCol={{ span: 24 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            name="username"
            rules={[{ required: true, message: "Please input your email!" }]}
          >
            <Input placeholder="Enter your email" />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password placeholder="Enter your password" />
          </Form.Item>
          <div className="landing-page_btn text-align-center">
            <Link to="/project-master">
              <div style={{ color: "#fff" }}>LOGIN</div>
            </Link>
          </div>
        </Form>
      </Modal>
    </div>
  );
}

export default LoginModal;
