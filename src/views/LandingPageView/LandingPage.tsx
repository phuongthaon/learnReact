/* begin general import */
import "./LandingPage.scss";
import bg from "../../assets/images/landing-bg.png";
import React from "react";
import LoginModal from "./LoginModal";

function LandingPageView() {
  const [isModalVisible, setIsModalVisible] = React.useState(false);
  const handleOpenLoginModal = React.useCallback(() => {
    setIsModalVisible(true);
  }, []);
  return (
    <div className="page text-align-center">
      <div className="page-content">
        <div className="page-content-title d-flex justify-content-between align-items-center">
          <div className="font-weight-700 font-size-30">STRUCTURAL BUDDY </div>
          <div className="d-flex align-items-center">
            <div className="width-25">
              <div className="font-weight-700 font-size-16 pr-16">Our Team</div>
            </div>
            <div className="width-25">
              <div className="font-weight-700 font-size-16 pr-16">Services</div>
            </div>
            <div className="width-25">
              <div className="font-weight-700 font-size-16 pr-16">Contact</div>
            </div>
            <div className="width-25">
              <div>
                <div
                  className="landing-page_btn ml-16"
                  onClick={handleOpenLoginModal}
                >
                  LOGIN
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="page-content-content">
          <div className="font-weight-700 font-size-30 pb-16">
            Solutions for you are our missions
          </div>
          <div className="font-weight-400 font-size-20 pb-16">
            We don’t provide any free trials, you need to pay for the services
            from us. Haha ...
          </div>
        </div>
        <div className="landing-page-bg">
          <img alt="" width={900} src={bg} />
        </div>
      </div>
      {isModalVisible && <LoginModal visible={isModalVisible} />}
    </div>
  );
}

export default LandingPageView;
