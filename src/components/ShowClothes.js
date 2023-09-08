import React from "react";
import styled from "styled-components";
import tshirt1 from "../assets/1.png";
import trowser1 from "../assets/2.png";
import tshirt2 from "../assets/3.png";
import trowser2 from "../assets/4.png";
import tshirt3 from "../assets/5.png";
import trowser3 from "../assets/6.png";
import tshirt4 from "../assets/7.png";
import trowser4 from "../assets/8.png";
import tshirt5 from "../assets/9.png";
import trowser5 from "../assets/10.png";
import tshirt6 from "../assets/11.png";
import trowser6 from "../assets/12.png";
import { useFilterContext } from "../context/filter_context";

const ShowClothes = () => {
  const { maleUp, maleDown } = useFilterContext();

  let img1 = "";
  let img2 = "";
  if (maleUp === 4) {
    img1 = tshirt1;
  }
  if (maleUp === 8) {
    img1 = tshirt2;
  }
  if (maleUp === 12) {
    img1 = tshirt3;
  }
  if (maleUp === 16) {
    img1 = tshirt4;
  }
  if (maleUp === 20) {
    img1 = tshirt5;
  }
  if (maleUp === 24) {
    img1 = tshirt6;
  }
  if (maleDown === 1) {
    img2 = trowser1;
  }
  if (maleDown === 5) {
    img2 = trowser2;
  }
  if (maleDown === 9) {
    img2 = trowser3;
  }
  if (maleDown === 13) {
    img2 = trowser4;
  }
  if (maleDown === 17) {
    img2 = trowser5;
  }
  if (maleDown === 21) {
    img2 = trowser6;
  }

  return (
    <Wrapper>
      <img src={img1} className="parent image1" />
      <img src={img2} className="parent image2" />
    </Wrapper>
  );
};

const Wrapper = styled.div`
 .image1 {
      position: absolute;
      top: 700px;
      height: 42%;
      left: 32px;
      z-index: 1;
  }
  .image2 {    
      position: absolute;
       height: 28%;
      top: 485px;
      left: 20px;
      z-index: 2;
      }`;

export default ShowClothes;
