/* begin general import */
import { Form, Input, Modal, ModalProps } from "antd";
import { Link } from "react-router-dom";

interface ProjectDetailModalProps extends ModalProps {
  handleClose?: () => void;
}

function ProjectDetailModal(props: ProjectDetailModalProps) {
  const { visible, handleClose } = props;
  const onFinish = (values: any) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div>
      <Modal title="Thông tin project" visible={visible} footer={false}>
        <Form
          name="basic"
          wrapperCol={{ span: 24 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            name="projectName"
            rules={[
              { required: true, message: "Please input your project name!" },
            ]}
          >
            <Input placeholder="Enter your project name" />
          </Form.Item>

          <Form.Item
            name="clientName"
            rules={[
              { required: true, message: "Please input your client name!" },
            ]}
          >
            <Input placeholder="Enter your client name" />
          </Form.Item>
          <div
            className="project-detail_btn text-align-center mt-24"
            onClick={handleClose}
          >
            <Link to="/learnReact/project-master/">
              <div style={{ color: "#fff" }}>DONE</div>
            </Link>
          </div>
        </Form>
      </Modal>
    </div>
  );
}

export default ProjectDetailModal;
