import {
  DeleteOutlined,
  EditOutlined,
  FieldTimeOutlined,
  FileOutlined,
  UserOutlined,
} from "@ant-design/icons";
import React, { useState } from "react";
import ProjectDetailModal from "./ProjectDetailModal";

const ProjectTableContent = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [trigger, setTrigger] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleClose = () => {
    setIsModalVisible(false);
    setTrigger(true);
  };

  const handleOpenDesignPage = React.useCallback(() => {
    window.location.href = `/learnReact/choose-design/`;
  }, []);

  return (
    <div>
      <div className="project-master_btn text-align-center" onClick={showModal}>
        <div className="font-weight-700 font-size-20">Create a new project</div>
      </div>
      {!trigger && (
        <div
          className="font-weight-700 font-size-30"
          style={{ paddingTop: "150px" }}
        >
          Let’s begin with your first project !
        </div>
      )}
      {trigger && (
        <div
          className="project-table-content_row d-flex justify-content-between"
          onClick={handleOpenDesignPage}
        >
          <div className="d-flex align-items-center pl-16">
            <FileOutlined />
            <div className="font-weight-700 font-size-16 pl-10">
              Project name 01
            </div>
          </div>
          <div className="d-flex align-items-center pl-16">
            <UserOutlined />
            <div className="font-weight-700 font-size-16 pl-10">
              Client name 01
            </div>
          </div>
          <div className="d-flex align-items-center pl-16">
            <FieldTimeOutlined />
            <div className="font-weight-700 font-size-16 pl-10">
              Project date time 01
            </div>
          </div>
          <div className="d-flex align-items-center pl-16 pr-16">
            <EditOutlined style={{ fontSize: "25px" }} onClick={showModal} />

            <DeleteOutlined
              className="pl-10"
              style={{ fontSize: "25px", color: "red" }}
            />
          </div>
        </div>
      )}

      {isModalVisible && (
        <ProjectDetailModal
          visible={isModalVisible}
          handleClose={handleClose}
        />
      )}
    </div>
  );
};

export default ProjectTableContent;
