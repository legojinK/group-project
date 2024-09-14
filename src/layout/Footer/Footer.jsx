import React from "react";
import "./Footer.style.css";

const Footer = () => {
  return (
    <div className="footer">
      <div>
        <img
          src="https://www.animal.go.kr/front/images/common/familysite/sitelogo1.png"
          alt="logo1"
          className="footer-logo1"
        />
        <img
          src="https://www.animal.go.kr/front/images/common/familysite/sitelogo2.png"
          alt="logo1"
          className="footer-logo1"
        />
        <img
          src="https://www.animal.go.kr/front/images/common/familysite/sitelogo3.png"
          alt="logo1"
          className="footer-logo1"
        />
        <img
          src="https://www.animal.go.kr/front/images/common/familysite/sitelogo4.png"
          alt="logo1"
          className="footer-logo1"
        />
      </div>
      <div className="text-logo">
        <img
          src="https://cdn-icons-png.flaticon.com/128/3047/3047928.png"
          alt="logo1"
          className="web-img"
        />
        <div>
          39660 경상북도 김천시 혁신8로 177(율곡동) 전화번호 : 1577-0954 (시스템
          문의 054-810-8626)
          <br />
          Copyright by Animal and Plant Quarantine Agency. All Rights Reserved.
        </div>
        <img
          src="https://www.animal.go.kr/front/images/common/wamark.png"
          alt="logo2"
          className="web-img"
        />
      </div>
    </div>
  );
};

export default Footer;
