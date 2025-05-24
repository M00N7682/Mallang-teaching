import React from "react";
import "./FinancePage.css";

import cook1 from "../assets/images/cook1.png";
import cook2 from "../assets/images/cook2.png";
import cook3 from "../assets/images/cook3.png";

const FinancePage = () => {
  return (
    <div className="finance-page">
      {/* 상단 제목 영역 */}
      <div className="finance-header">
        <h2>👨‍🍳 조리사</h2>
        <p>좋아하는 걸 발견하고, 직접 공부해 보는 연습!</p>
      </div>

      {/* 콘텐츠 영역 */}
      <div className="finance-content">
        {/* 왼쪽: 이미지 3개 + 설명 */}
        <div className="cook-images">
          <div className="cook-box">
            <img src={cook1} alt="조리사 1" />
            <p>음식을 만드는 사람이에요.</p>
          </div>
          <div className="cook-box">
            <img src={cook2} alt="조리사 2" />
            <p>재료를 깨끗이 씻고, 칼로 자르고, 불에 익혀요.</p>
          </div>
          <div className="cook-box">
            <img src={cook3} alt="조리사 3" />
            <p>손님에게 예쁘게 담아 줘요.</p>
          </div>
        </div>

        {/* 오른쪽: 누가 할까요? 박스 */}
        <div className="cook-right">
          <div className="who-box">
            <strong>누가 할까요?</strong>
            <ul>
              <li>냄새 잘 맡는 친구</li>
              <li>손으로 만들기를 좋아하는 친구</li>
              <li>맛있는 음식을 좋아하는 친구</li>
            </ul>
          </div>

          <button className="next-career-btn">다른 진로 알아보기</button>
        </div>
      </div>
    </div>
  );
};

export default FinancePage;
