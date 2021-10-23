/* begin general import */
import footingSteelArrangement from "../../assets/images/footing-steel-arrangement.png";
import footingPressure from "../../assets/images/footing-pressure.png";
import footingModel from "../../assets/images/footing-model.png";
import Header from "../Header/Header";
import React from "react";
import { Col, Input, Row } from "antd";

function DesignDetail() {
  return (
    <div className="page text-align-center">
      <Header />
      <Row className="pt-24">
        <Col lg={12}>
          <div className="d-flex align-items-center">
            <div className="font-weight-400 font-size-13 width-30 label-form">
              Name of Column:
            </div>
            <div className="width-form">
              <Input allowClear />
            </div>
          </div>
          {/* row */}
          <div className="d-flex align-items-center pt-16">
            <div className="font-weight-400 font-size-13 width-30 label-form">
              Unique Name:
            </div>
            <div className="width-form">
              <Input allowClear />
            </div>
          </div>
          {/* row */}
          <div className="d-flex align-items-center pt-16">
            <div className="font-weight-400 font-size-13 width-30 label-form">
              Combo Case:
            </div>
            <div className="width-form">
              <Input allowClear />
            </div>
          </div>
          {/* row */}
          <div className="d-flex align-items-center pt-16">
            <div className="font-weight-400 font-size-13 width-30 label-form">
              Combo Type:
            </div>
            <div className="width-form">
              <Input allowClear />
            </div>
          </div>
          {/* row */}
          <div className="d-flex align-items-center pt-16">
            <div className="font-weight-400 font-size-13 width-30 label-form">
              Axial Force:
            </div>
            <div className="width-form">
              <Input allowClear />
            </div>
            <div className="font-weight-400 font-size-13 pl-10">kN</div>
          </div>
          {/* row */}
          <div className="d-flex align-items-center pt-16">
            <div className="font-weight-400 font-size-13 width-30 label-form">
              Bending Moment 2-2:
            </div>
            <div className="width-form">
              <Input allowClear />
            </div>
            <div className="font-weight-400 font-size-13 pl-10">kN.m</div>
          </div>
          {/* row */}
          <div className="d-flex align-items-center pt-16">
            <div className="font-weight-400 font-size-13 width-30 label-form">
              Bending Moment 3-3:
            </div>
            <div className="width-form">
              <Input allowClear />
            </div>
            <div className="font-weight-400 font-size-13 pl-10">kN.m</div>
          </div>
          {/* row */}
          <div className="d-flex align-items-center pt-16">
            <div className="font-weight-400 font-size-13 width-30 label-form">
              Soil Depth:
            </div>
            <div className="width-form">
              <Input allowClear />
            </div>
            <div className="font-weight-400 font-size-13 pl-10">mm</div>
          </div>
          {/* row */}
          <div className="d-flex align-items-center pt-16">
            <div className="font-weight-400 font-size-13 width-30 label-form">
              Soil Weigth Density:
            </div>
            <div className="width-form">
              <Input allowClear />
            </div>
            <div className="font-weight-400 font-size-13 pl-10">kN/mm3</div>
          </div>
          {/* row */}
        </Col>
        <Col lg={12}>
          <div className="d-flex align-items-center">
            <div className="font-weight-400 font-size-13 width-30 label-form">
              Width of Column:
            </div>
            <div className="width-form">
              <Input allowClear />
            </div>
            <div className="font-weight-400 font-size-13 pl-10">mm</div>
          </div>
          {/* row */}
          <div className="d-flex align-items-center pt-16">
            <div className="font-weight-400 font-size-13 width-30 label-form">
              Length of Column:
            </div>
            <div className="width-form">
              <Input allowClear />
            </div>
            <div className="font-weight-400 font-size-13 pl-10">mm</div>
          </div>
          {/* row */}
          <div className="d-flex align-items-center pt-16">
            <div className="font-weight-400 font-size-13 width-30 label-form">
              Width of Footing:
            </div>
            <div className="width-form">
              <Input allowClear />
            </div>
            <div className="font-weight-400 font-size-13 pl-10">mm</div>
          </div>
          {/* row */}
          <div className="d-flex align-items-center pt-16">
            <div className="font-weight-400 font-size-13 width-30 label-form">
              Length of Footing:
            </div>
            <div className="width-form">
              <Input allowClear />
            </div>
            <div className="font-weight-400 font-size-13 pl-10">mm</div>
          </div>
          {/* row */}
          <div className="d-flex align-items-center pt-16">
            <div className="font-weight-400 font-size-13 width-30 label-form">
              Depth of Footing:
            </div>
            <div className="width-form">
              <Input allowClear />
            </div>
            <div className="font-weight-400 font-size-13 pl-10">mm</div>
          </div>
          {/* row */}
          <div className="d-flex align-items-center pt-16">
            <div className="font-weight-400 font-size-13 width-30 label-form">
              Concrete Grade:
            </div>
            <div className="width-form">
              <Input allowClear />
            </div>
            <div className="font-weight-400 font-size-13 pl-10">MPa</div>
          </div>
          {/* row */}
          <div className="d-flex align-items-center pt-16">
            <div className="font-weight-400 font-size-13 width-30 label-form">
              Bearing Capacity:
            </div>
            <div className="width-form">
              <Input allowClear />
            </div>
            <div className="font-weight-400 font-size-13 pl-10">KPa</div>
          </div>
          {/* row */}
          <div className="d-flex align-items-center pt-16">
            <div className="font-weight-400 font-size-13 width-30 label-form">
              Steel Yield Stress:
            </div>
            <div className="width-form">
              <Input allowClear />
            </div>
            <div className="font-weight-400 font-size-13 pl-10">MPa</div>
          </div>
          {/* row */}
        </Col>
      </Row>
      <Row className="pt-30">
        <Col lg={8} className="pl-10">
          <div className="d-flex pl-60">
            <div className="font-weight-700 font-size-13 pl-10">
              Ast_length =
            </div>
            <div className="font-weight-400 font-size-13 pl-10">20 mm2</div>
          </div>
          <div className="d-flex">
            <img
              alt=""
              width={300}
              height={200}
              src={footingSteelArrangement}
            />
            <div className="d-flex line-height-200">
              <div className="font-weight-700 font-size-13 pl-10">
                Ast_width =
              </div>
              <div className="font-weight-400 font-size-13 pl-10">20 mm2</div>
            </div>
          </div>
        </Col>
        <Col lg={8}>
          <div className="d-flex justify-content-between width-75">
            <div className="d-flex">
              <div className="font-weight-700 font-size-13 pl-10">p4 =</div>
              <div className="font-weight-400 font-size-13 pl-10">20 MPa</div>
            </div>
            <div className="d-flex">
              <div className="font-weight-700 font-size-13 pl-10">p3 =</div>
              <div className="font-weight-400 font-size-13 pl-10">20 MPa</div>
            </div>
          </div>
          <img alt="" width={300} height={200} src={footingPressure} />
          <div className="d-flex justify-content-between width-75">
            <div className="d-flex">
              <div className="font-weight-700 font-size-13 pl-10">p1 =</div>
              <div className="font-weight-400 font-size-13 pl-10">20 MPa</div>
            </div>
            <div className="d-flex">
              <div className="font-weight-700 font-size-13 pl-10">p2 =</div>
              <div className="font-weight-400 font-size-13 pl-10">20 MPa</div>
            </div>
          </div>
        </Col>
        <Col lg={8}>
          <img alt="" width={300} height={300} src={footingModel} />
        </Col>
      </Row>
    </div>
  );
}

export default DesignDetail;
