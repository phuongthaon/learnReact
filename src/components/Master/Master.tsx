import React, { Fragment, useState } from "react";
import Create from "../Create/Create";
import Edit from "../Edit/Edit";
import Table from "../Table/Table";
import { Modal, Button } from "antd";
import "./Master.scss";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Frame from "../Frame/Frame";


type USER = {
  id: number | null;
  no: number | null;
  image?: string;
  code: string;
  name?: string;
  list?: string;
  group?: string;
  category?: string;
  supplier?: string;
  status?: string;
  version?: string;
};

const Master = () => {
  const usersData: Array<USER> = [{
    id: 1,
    no: 1,
    image: "",
    code: "Bóng đèn",
    name: "Bóng đèn",
    list: "",
    group: "",
    category: "",
    supplier: "",
    status: "",
    version: "",
  },];
  const initialFormState: USER = {
    id: null,
    no: null,
    image: "",
    code: "",
    name: "",
    list: "",
    group: "",
    category: "",
    supplier: "",
    status: "",
    version: "",
  };

  const [users, setUsers] = useState(usersData);
  const [currentUser, setCurrentUser] = useState(initialFormState);
  const [editing, setEditing] = useState(false);
  const add = (user: USER) => {
    user.id = users.length + 1;
    user.no = users.length + 1;
    setUsers([...users, user]);
  };
  const deleted = (id: number | null) => {
    setEditing(false);
    setUsers(users.filter((user) => user.id != id));
  };
  const update = (id: number | null, updated: USER) => {
    setEditing(false);
    setUsers(users.map((user) => (user.id === id ? updated : user)));
  };
  const edit = (user: USER) => {
    setEditing(true);
    setCurrentUser({
      id: user.id,
      no: user.no,
      image: user.image,
      code: user.code,
      name: user.name,
      list: user.list,
      group: user.group,
      category: user.category,
      supplier: user.supplier,
      status: user.status,
      version: user.version,
    });
  };
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleClose = () => {
    setIsModalVisible(false);
  };

  return (
    <div className="container">
      <div className="flex-row">
        <div className="flex-large">
          <Button type="primary" onClick={showModal} className="create-btn">
            Tạo mới
          </Button>
          <div>
            <Button type="primary" className="other-btn">
              <Link to="/create-product">Chuyển đến trang khác</Link>
            </Button>
          </div>
          {editing ? (
            <Fragment>
              <Modal
                title="Chi tiết sản phẩm"
                visible={true}
                closable={false}
                footer={null}
              >
                <Edit
                  editing={editing}
                  setEditing={setEditing}
                  currentUser={currentUser}
                  update={update}
                />
              </Modal>
            </Fragment>
          ) : (
            <Fragment>
              <Modal
                title="Chi tiết sản phẩm"
                visible={isModalVisible}
                closable={false}
                footer={null}
              >
                <Create add={add} handleClose={handleClose} />
              </Modal>
            </Fragment>
          )}

          <Table users={users} edit={edit} deleted={deleted} />
        </div>
      </div>
    </div>
  );
};

export default Master;
