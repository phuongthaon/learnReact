/* begin general import */
import steel from "../../assets/images/steel.png";
import footing from "../../assets/images/footing.png";
import concrete from "../../assets/images/concrete.png";
import Header from "../Header/Header";
import React from "react";

function ChooseDesign() {
  const handleChoseDesign = React.useCallback(() => {
    window.location.href = `/learnReact/design-detail`;
  }, []);
  return (
    <div className="page text-align-center">
      <Header />
      <div className="page-content">
        <div className="choose-design_wrapper d-flex justify-content-between ">
          <div>
            <div className="font-weight-700 font-size-20">Concrete Design</div>
            <img
              src={concrete}
              alt=""
              width={250}
              onClick={handleChoseDesign}
            />
          </div>
          <div>
            <div className="font-weight-700 font-size-20">Steel Design</div>
            <img src={steel} alt="" width={250} onClick={handleChoseDesign} />
          </div>
          <div>
            <div className="font-weight-700 font-size-20">Footing Design</div>
            <img src={footing} alt="" width={250} onClick={handleChoseDesign} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChooseDesign;
