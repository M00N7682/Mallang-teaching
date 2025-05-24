// src/components/Header.tsx
import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import logo from "../assets/images/logo.png"; // ← src 내 위치 기준

const Header = () => {
  return (
    <header className="header">
      <div className="logo-section">
        <img src={logo} alt="말랑교실 로고" className="logo-img" />
        <span className="logo-text">말랑교실</span>
      </div>
      <nav className="menu">
        <Link to="/">내 교실</Link>
        <Link to="/history">과거 학습 기록</Link>
        <Link to="/question">질문하기</Link>
      </nav>
      <div className="search-box">
        <input type="text" placeholder="검색어를 입력하세요." />
        <button>🔍</button>
      </div>
    </header>
  );
};

export default Header;
