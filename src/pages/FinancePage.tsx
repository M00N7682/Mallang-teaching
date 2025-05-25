import React, { useState } from "react";
import "./FinancePage.css";

import career1 from "../assets/images/job1.png";
import career2 from "../assets/images/job2.png";
import jobBanner from "../assets/images/job_banner.png";

const FinancePage = () => {
  const careerImages = [career1, career2];
  const [index, setIndex] = useState(0);

  const handleNext = () => {
    setIndex((prev) => (prev + 1) % careerImages.length);
  };

  return (
    <div className="finance-page">
      {/* 🔽 추가된 배너 */}
      <div className="job-banner-wrapper">
        <img src={jobBanner} alt="직업 소개 배너" className="job-banner" />
      </div>

      <img src={careerImages[index]} alt={`진로 이미지 ${index + 1}`} className="career-image" />
      <button onClick={handleNext} className="next-button">다른 진로 알아보기</button>
    </div>
  );
};

export default FinancePage;
