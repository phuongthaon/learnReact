import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import "./Edit.scss";
import { Button } from "antd";

type USER = {
  id:number|null;
  no: number|null;
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

interface PROPS{
  currentUser: USER,
  update:(id:number|null, updated:USER) => void,
  editing:boolean,
  setEditing:(editing:boolean)=>void,
  
}

const Edit = (props:PROPS) => {
  const [user, setUser] = useState(props.currentUser);
  useEffect(() => {
    setUser(props.currentUser);
  }, [props]);
  const handleInputChange = (e: React.SyntheticEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget;
    setUser({ ...user, [name]: value });
  };
  return (
    <form>
      <div className="row">
        <div className="col-25">
          <label htmlFor="code">Mã sản phẩm</label>
        </div>
        <div className="col-75">
          <input
            type="text"
            id="code"
            name="code"
            value={user.code}
            onChange={handleInputChange}
          />
        </div>
      </div>

      <div className="row">
        <div className="col-25">
          <label htmlFor="name">Tên sản phẩm</label>
        </div>
        <div className="col-75">
          <input
            type="text"
            id="name"
            name="name"
            value={user.name}
            onChange={handleInputChange}
          />
        </div>
      </div>

      <div className="row">
        <div className="col-25">
          <label htmlFor="list">Danh mục sản phẩm</label>
        </div>
        <div className="col-75">
          <input
            type="text"
            id="list"
            name="list"
            value={user.list}
            onChange={handleInputChange}
          />
        </div>
      </div>

      <div className="row">
        <div className="col-25">
          <label htmlFor="group">Nhóm sản phẩm</label>
        </div>
        <div className="col-75">
          <input
            type="text"
            id="group"
            name="group"
            value={user.group}
            onChange={handleInputChange}
          />
        </div>
      </div>

      <div className="row">
        <div className="col-25">
          <label htmlFor="category">Loại sản phẩm</label>
        </div>
        <div className="col-75">
          <input
            type="text"
            id="category"
            name="category"
            value={user.category}
            onChange={handleInputChange}
          />
        </div>
      </div>

      <div className="row">
        <div className="col-25">
          <label htmlFor="supplier">Nhà cung cấp</label>
        </div>
        <div className="col-75">
          <input
            type="text"
            id="supplier"
            name="supplier"
            value={user.supplier}
            onChange={handleInputChange}
          />
        </div>
      </div>

      <div className="row">
        <div className="col-25">
          <label htmlFor="status">Trạng thái</label>
        </div>
        <div className="col-75">
          <input
            type="text"
            id="status"
            name="status"
            value={user.status}
            onChange={handleInputChange}
          />
        </div>
      </div>

      <div className="row">
        <div className="col-25">
          <label htmlFor="version">Sử dụng phiên bản</label>
        </div>
        <div className="col-75">
          <input
            type="text"
            id="version"
            name="version"
            value={user.version}
            onChange={handleInputChange}
          />
        </div>
      </div>
      <div className="row footer-btn">
        <Button type="primary" value="small" className="update-btn"  onClick={(e) => {
          e.preventDefault();
          props.update(user.id, user);
        }}>
          Update
        </Button>
        <Button
          type="primary"
          danger
          className="close-btn"
         onClick={() => props.setEditing(false)}
        >
          Cancel
        </Button>
      </div>

    </form>
  );
};

export default Edit;
