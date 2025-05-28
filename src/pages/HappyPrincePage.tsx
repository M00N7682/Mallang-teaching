import React, { useState } from "react";
import "./HappyPrincePage.css";
import bannerImage from "../assets/images/story_banner.png";
import scene1 from "../assets/images/book_scene1.png";
import scene2 from "../assets/images/book_scene2.png";
import { FaChevronDown } from "react-icons/fa";

export default function BookPage() {
  const [text1, setText1] = useState(
    `착한 심성을 가진 보석 왕자 동상은 어려운 사람을 도와주고싶었어요. \n 그래서 제비에게 그에게 다가온 제비에게 도움을 요청했답니다. ”`
  );
  const [text2, setText2] = useState(
    `작은 제비가 보석 왕자 동상의 말을 듣고, 왕자의 눈물 같은 보석을 가져왔어요. \n 그 보석은 가난한 소년을 위한 것이었어요. \n 그래서 제비는 이 보석은 울고있던 소년에게 가져다주었어요 !`
  );

  const handleNotUnderstood = () => {
    setText1("보석 왕자는 제비에게 부탁했습니다. \n 보석 왕자 : 제비야 가난한 소년을 도와주고싶어. 너가 나를 도와줄 수 있니?");
    setText2("제비는 보석 왕자의 부탁을 들어주기로 했어요. \n 제비 : 왕자님의 부탁으로 가져온 보석이야. 이 보석으로 맛있는 음식을 사 먹으렴 !");
  };

  return (
    <div className="book-page">
      <img src={bannerImage} alt="소설 배너" className="book-banner" />

      <h2 className="book-title">행복한 왕자 (오스카 와일드)</h2>

      <div className="scene">
        <img src={scene1} alt="보석 왕자 장면" className="scene-image" />
        <p className="scene-text">{text1}</p>
      </div>

      <div className="scene">
        <img src={scene2} alt="작은 제비 장면" className="scene-image" />
        <p className="scene-text">{text2}</p>
      </div>

      <div className="understanding-box">
        <button className="understood">이해했어요</button>
        <button className="not-understood" onClick={handleNotUnderstood}>
          이해가 안돼요
        </button>
      </div>

      <div className="scroll-icon">
        <FaChevronDown size={32} color="#0f4c75" />
      </div>
    </div>
  );
}
