import React from "react";
import "./MainBanner.css";
import mainBannerImg from "../assets/images/main_banner.png"; // 실제 경로에 따라 수정

const MainBanner = () => {
  return (
    <div className="main-banner">
      <img src={mainBannerImg} alt="메인 배너" className="main-banner-img" />
    </div>
  );
};

export default MainBanner;
