import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

import mainBanner from "../assets/images/main_banner.png";
import financeImg from "../assets/images/finance.png";
import safetyImg from "../assets/images/safety.png";
import careerImg from "../assets/images/career.png";
import storyImg from "../assets/images/story.png";

const Home = () => {
  return (
    <div className="home-page">
      {/* 메인 배너 */}
      <section className="main-banner">
        <img src={mainBanner} alt="말랑교실 메인 배너" className="banner-img" />
      </section>

      {/* 더 알아보기 */}
      <section className="learn-more">
        <div className="image-link-container">
          <Link to="/finance">
            <img src={financeImg} alt="금융 교육" className="image-link" />
          </Link>
          <Link to="/safety">
            <img src={safetyImg} alt="교통 안전" className="image-link" />
          </Link>
          <Link to="/career">
            <img src={careerImg} alt="진로 교육" className="image-link" />
          </Link>
          <Link to="/book-select">  {/* ✅ 여기만 수정 */}
            <img src={storyImg} alt="소설" className="image-link" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
