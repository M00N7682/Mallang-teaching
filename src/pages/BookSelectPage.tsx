import React from "react";
import { useNavigate } from "react-router-dom";
import "./BookSelectPage.css";

// 배너 및 책 표지 이미지
import storyBanner from "../assets/images/story_banner.png";
import book1Cover from "../assets/images/book_scene1.png";     // 행복한 왕자
import book2Cover from "../assets/images/Book2.png";            // 구운몽
import book3Cover from "../assets/images/Book3.png";            // 숙향전
import book4Cover from "../assets/images/Book4.png";            // 홍길동전
import book5Cover from "../assets/images/Book5.png";            // 오만과 편견

export default function BookSelectPage() {
  const navigate = useNavigate();

  const goToBook = (bookId: string) => {
    navigate(`/book/${bookId}`);
  };

  return (
    <div className="book-select-page">
      <img src={storyBanner} alt="소설 배너" className="select-banner" />
      <h2 className="select-title">읽고 싶은 책을 골라보세요!</h2>

      <div className="book-list">
        {/* 행복한 왕자 */}
        <div className="book-card">
          <img src={book1Cover} alt="행복한 왕자 표지" className="book-cover" />
          <div className="book-info">
            <h3>행복한 왕자</h3>
            <p>오스카 와일드</p>
            <button onClick={() => goToBook("happy-prince")}>📖 책 보러 가기</button>
          </div>
        </div>

        {/* 오만과 편견 */}
        <div className="book-card">
          <img src={book5Cover} alt="오만과 편견 표지" className="book-cover" />
          <div className="book-info">
            <h3>오만과 편견</h3>
            <p>제인 오스틴</p>
            <button onClick={() => goToBook("pride-prejudice")}>📖 책 보러 가기</button>
          </div>
        </div>

        {/* 구운몽 */}
        <div className="book-card">
          <img src={book2Cover} alt="구운몽 표지" className="book-cover" />
          <div className="book-info">
            <h3>구운몽</h3>
            <p>김만중</p>
            <button onClick={() => goToBook("goonmong")}>📖 책 보러 가기</button>
          </div>
        </div>

        {/* 숙향전 */}
        <div className="book-card">
          <img src={book3Cover} alt="숙향전 표지" className="book-cover" />
          <div className="book-info">
            <h3>숙향전</h3>
            <p>작자 미상</p>
            <button onClick={() => goToBook("sukhyangjeon")}>📖 책 보러 가기</button>
          </div>
        </div>

        {/* 홍길동전 */}
        <div className="book-card">
          <img src={book4Cover} alt="홍길동전 표지" className="book-cover" />
          <div className="book-info">
            <h3>홍길동전</h3>
            <p>허 균</p>
            <button onClick={() => goToBook("honggildong")}>📖 책 보러 가기</button>
          </div>
        </div>
      </div>
    </div>
  );
}
