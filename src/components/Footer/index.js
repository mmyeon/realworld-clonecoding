import React from "react";
import facebookIcon from "../../images/footer/facebook-icon.svg";
import instagramIcon from "../../images/footer/instagram-icon.svg";
import emailIcon from "../../images/footer/email-icon.svg";
import kakaoIcon from "../../images/footer/kakao-icon.svg";
import naverIcon from "../../images/footer/naver-icon.svg";
import youtubeIcon from "../../images/footer/youtube-icon.svg";
import Styled from "./index.styles";

const index = () => {
  return (
    <Styled.Footer>
      <div className="container">
        <div className="footer-left">
          <h3 className="title">주식회사 유니크굿 컴퍼니</h3>
          <p>
            <b>사업자등록번호</b> 524-88-00746 |<b> 통신판매업신고번호</b>
            2018-서울성동-0760호 <br></br>
            <b>대표이사</b> 이은영,송인혁 | 서울특별시 성동구 성수일로 89
            메타모르포 501호<br></br>
            <b>전화</b> 070-8706-1010
          </p>
        </div>

        <div className="footer-right">
          <h3 className="title">Contact</h3>
          <div className="icon-top">
            <a
              href="https://www.facebook.com/uniquegoodcompany"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={facebookIcon} alt="facebook icon" />
            </a>
            <a
              href="https://www.instagram.com/uniquegoodcompany/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={instagramIcon} alt="instagram icon" />
            </a>
            <a
              href="https://blog.naver.com/uniquegoodcompany"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={naverIcon} alt="naver icon" />
            </a>
            <a
              href="https://www.youtube.com/channel/UCf0yUWNWZF_0sfpeX3PhEcQ"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={youtubeIcon} alt="youtube icon" />
            </a>
          </div>
          <div className="icon-bottom">
            <a
              href="https://pf.kakao.com/_xbFurxb"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={kakaoIcon} alt="kakao icon" />
              <span>@리얼월드</span>
            </a>
            <a
              href="mailto:cs@realworld.to"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={emailIcon} alt="email icon" />
              <span>contact@uniquegood.biz</span>
            </a>
          </div>
        </div>
      </div>
    </Styled.Footer>
  );
};

export default index;
