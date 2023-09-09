import React from "react";
import styled from "styled-components";
import ts1 from "../assets/11.png";
import ts2 from "../assets/12.png";
import ts3 from "../assets/13.png";
import ts4 from "../assets/14.png";
import ts5 from "../assets/15.png";
import ts6 from "../assets/16.png";
import ts7 from "../assets/17.png";
import ts8 from "../assets/18.png";
import ts9 from "../assets/19.png";
import ts10 from "../assets/20.png";
import t1 from "../assets/1.png";
import t2 from "../assets/2.png";
import t3 from "../assets/3.png";
import t4 from "../assets/4.png";
import t5 from "../assets/5.png";
import t6 from "../assets/6.png";
import t7 from "../assets/7.png";
import t8 from "../assets/8.png";
import t9 from "../assets/9.png";
import t10 from "../assets/10.png";
import { useFilterContext } from "../context/filter_context";

const ShowClothes = () => {
  const { maleUp, maleDown } = useFilterContext();

  let img1 = "";
  let img2 = "";

  // if (maleUp != 0) {
  //   img1 = `ts${maleUp}`;
  //   console.log("aa");
  // }

  if (maleUp === 4) {
    img1 = ts1;
  }
  if (maleUp === 8) {
    img1 = ts2;
  }
  if (maleUp === 12) {
    img1 = ts3;
  }
  if (maleUp === 16) {
    img1 = ts4;
  }
  if (maleUp === 20) {
    img1 = ts5;
  }
  if (maleUp === 24) {
    img1 = ts6;
  }
  if (maleUp === 28) {
    img1 = ts7;
  }
  if (maleUp === 32) {
    img1 = ts8;
  }
  if (maleUp === 36) {
    img1 = ts9;
  }
  if (maleUp === 40) {
    img1 = ts10;
  }

  if (maleDown === 1) {
    img2 = t1;
  }
  if (maleDown === 5) {
    img2 = t2;
  }
  if (maleDown === 9) {
    img2 = t3;
  }
  if (maleDown === 13) {
    img2 = t4;
  }
  if (maleDown === 17) {
    img2 = t5;
  }
  if (maleDown === 21) {
    img2 = t6;
  }
  if (maleDown === 25) {
    img2 = t7;
  }
  if (maleDown === 29) {
    img2 = t8;
  }
  if (maleDown === 33) {
    img2 = t9;
  }
  if (maleDown === 37) {
    img2 = t10;
  }

  return (
    <Wrapper>
      <img src={img2} className="parent image1" />
      <img src={img1} className="parent image2" />
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
      left: 22px;
      z-index: 2;
      }`;

export default ShowClothes;
