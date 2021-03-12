import React from "react";
import { Button } from "antd";
import {
  BrowserRouter as
    Link,
  useHistory,
} from "react-router-dom";

function SubPage() {
  let history = useHistory();
  function handleClick() {
    history.push("/create-product");
  }
  return (
    <div>
      Hello
      <div>
        <Button type="primary" className="other-btn" onClick={handleClick}>
          Quay về
        </Button>
      </div>
    </div>
  );
}

export default SubPage;
