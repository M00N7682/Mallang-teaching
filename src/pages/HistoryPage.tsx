import React, { useState } from "react";
import "./HistoryPage.css";
import bannerImage from "../assets/images/job_banner.png";
import studentImage from "../assets/images/student.png";

import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

export default function HistoryPage() {
  const [value, setValue] = useState(new Date());

  return (
    <div className="history-page">
      <img src={bannerImage} alt="배너" className="banner-image" />

      <div className="content-container">
        {/* 왼쪽 박스 */}
        <div className="left-section">
          <div className="profile-box">
            <img src={studentImage} alt="학생" />
            <div>
              <p>이름: 김말랑</p>
              <p>학년: 6학년 말랑이</p>
              <p>학교: 말랑초등학교</p>
              <p>반: 1반</p>
              <p>번호: 3번</p>
            </div>
          </div>

          <div className="chat-box">
            <p>
              <strong>오늘 수업 내용 어땠어요?</strong> 말풍선에서 골라볼래요?
            </p>
            <div className="emotions">
              <button>😊 좋아요</button>
              <button>😵 어려워요</button>
              <button>😴 졸려요</button>
            </div>
            <input type="text" placeholder="여기에 적어주세요..." />
          </div>
        </div>

        {/* 오른쪽 박스 */}
        <div className="right-section">
          <div className="calendar-and-todo">
            <div className="calendar-box">
              <h3>이번주에 할 일을 확인해 볼까요?</h3>
              <Calendar onChange={setValue} value={value} />
            </div>

            <div className="today-todo-box">
              <h3>오늘의 할 일</h3>
              <ul>
                <li><input type="checkbox" /> 진로 교육 듣기</li>
                <li><input type="checkbox" /> '어린왕자' 읽고 독서록 쓰기</li>
                <li><input type="checkbox" /> 방과후 활동 하기</li>
              </ul>
            </div>
          </div>

          <div className="book-box">
            <h3>내가 말랑 보관함에 담아둔 책</h3>
            <p>
              📘 가방 들어주는 아이 - 고정욱 <button>읽으러 가기!</button>
            </p>
            <p>
              📗 어린 왕자 - 생텍쥐페리 <button>읽으러 가기!</button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
