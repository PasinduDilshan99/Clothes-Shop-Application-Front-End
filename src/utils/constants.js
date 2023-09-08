import React from "react";
import { GiCompass, GiDiamondHard, GiStabbedNote } from "react-icons/gi";
import tshirts1 from "../assets/1.png";
import trowser1 from "../assets/2.png";
import tshirts2 from "../assets/3.png";
import trowser2 from "../assets/4.png";
import tshirts3 from "../assets/5.png";
import trowser3 from "../assets/6.png";
import tshirts4 from "../assets/7.png";
import trowser4 from "../assets/8.png";
import tshirts5 from "../assets/9.png";
import trowser5 from "../assets/10.png";
import tshirts6 from "../assets/11.png";
import trowser6 from "../assets/12.png";
import trowser001 from "../tempDataSet/trowser-001.jpg";
import trouser002 from "../tempDataSet/trowser-002.jpeg";
import trouser003 from "../tempDataSet/trowser-003.jpg";
import toy1 from "../tempDataSet/toys-001.jpeg";
import toy2 from "../tempDataSet/toys-002.jpg";
import toy3 from "../tempDataSet/toys-003.jpg";
import top1 from "../tempDataSet/tops-001.jpg";
import top2 from "../tempDataSet/tops-002.jpeg";
import top3 from "../tempDataSet/tops-003.jpg";
import skirt1 from "../tempDataSet/skirt-001.jpeg";
import skirt2 from "../tempDataSet/skirt-002.jpeg";
import skirt3 from "../tempDataSet/skirt-003.jpeg";
import short1 from "../tempDataSet/shorts-001.jpg";
import short2 from "../tempDataSet/shorts-002.jpg";
import short3 from "../tempDataSet/shorts-003.jpg";
import short4 from "../tempDataSet/shorts-004.jpg";
import short5 from "../tempDataSet/shorts-005.jpg";
import short6 from "../tempDataSet/shorts-006.jpg";
import pant1 from "../tempDataSet/pants-001.jpg";
import pant2 from "../tempDataSet/pants-002.jpg";
import pant3 from "../tempDataSet/pants-003.jpg";
import formalshirt1 from "../tempDataSet/formal-shirt-001.jpg";
import formalshirt2 from "../tempDataSet/formal-shirt-002.jpg";
import formalshirt3 from "../tempDataSet/formal-shirt-003.jpg";
import dress1 from "../tempDataSet/dress-001.jpg";
import dress2 from "../tempDataSet/dress-002.jpg";
import dress3 from "../tempDataSet/dress-003.jpg";
import denim1 from "../tempDataSet/denim-001.jpeg";
import denim2 from "../tempDataSet/denim-002.jpeg";
import denim3 from "../tempDataSet/denim-003.jpeg";
import denim4 from "../tempDataSet/denim-004.jpeg";
import denim5 from "../tempDataSet/denim-005.jpeg";
import denim6 from "../tempDataSet/denim-006.jpeg";
import casualshirt1 from "../tempDataSet/casual-shirts-001.jpg";
import casualshirt2 from "../tempDataSet/casual-shirts-002.jpg";
import casualshirt3 from "../tempDataSet/casual-shirts-003.jpg";
import casualpant1 from "../tempDataSet/casual-pants-001.jpeg";
import casualpant2 from "../tempDataSet/casual-pants-002.jpeg";
import casualpant3 from "../tempDataSet/casual-pants-003.jpeg";
import tshirt1 from "../tempDataSet/t-shirt-001.jpg";
import tshirt2 from "../tempDataSet/t-shirt-002.jpg";
import tshirt3 from "../tempDataSet/t-shirt-003.jpg";
import tshirt4 from "../tempDataSet/t-shirt-004.jpg";
import tshirt5 from "../tempDataSet/t-shirt-005.jpg";
import tshirt6 from "../tempDataSet/t-shirt-006.jpg";

export const links = [
  {
    id: 1,
    text: "home",
    url: "/",
  },
  {
    id: 2,
    text: "about",
    url: "/about",
  },
  {
    id: 3,
    text: "products",
    url: "/products",
  },
];

export const services = [
  {
    id: 1,
    icon: <GiCompass />,
    title: "mission",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi",
  },
  {
    id: 2,
    icon: <GiDiamondHard />,
    title: "vision",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi",
  },
  {
    id: 3,
    icon: <GiStabbedNote />,
    title: "history",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi",
  },
];

export const data = [
  {
    id: 1,
    name: "T-shirt 1",
    price: 100,
    image: `${trowser1}`,
    colors: ["#ff0000", "#ffffff", "#000000"],
    company: "company A",
    description: "Cloud bread VHS hell of banjo bi",
    category: "T-shirt",
    shipping: true,
    gen: "male",
    stock: 0,
    reviews: 25,
    stars: 4.2,
    featured: true,
  },
  {
    id: 2,
    name: "trouser 002",
    price: 200,
    image: `${trowser001}`,
    colors: ["#ff0000"],
    company: "company B",
    description: "Cloud bread VHS hell of banjo bi",
    category: "trouser",
    shipping: true,
    gen: "male",
    stock: 5,
    reviews: 25,
    stars: 2.5,
    featured: true,
  },
  {
    id: 3,
    name: "trouser 003",
    price: 45000,
    image: `${trouser003}`,
    colors: ["#ff0000"],
    company: "company A",
    description: "Cloud bread VHS hell of banjo bi",
    category: "trouser",
    shipping: true,
    gen: "male",
    stock: 5,
    reviews: 25,
    stars: 2.5,
    featured: true,
  },
  {
    id: 4,
    name: "trouser 1",
    price: 125,
    image: `${tshirts1}`,
    colors: ["#ff0000"],
    company: "company A",
    description: "Cloud bread VHS hell of banjo bi",
    category: "trouser",
    shipping: false,
    gen: "male",
    stock: 5,
    reviews: 25,
    stars: 2.5,
    featured: true,
  },
  {
    id: 5,
    name: "T-shirt 1",
    price: 110,
    image: `${trowser2}`,
    colors: ["#ff0000", "#00ff00", "#0000ff"],
    company: "company C",
    description: "Cloud bread VHS hell of banjo bi",
    category: "T-shirt",
    shipping: true,
    gen: "male",
    stock: 0,
    reviews: 25,
    stars: 2.5,
    featured: true,
  },
  {
    id: 6,
    name: "toys 003",
    price: 150000,
    image: `${toy3}`,
    colors: ["#ff0000", "#00ff00", "#0000ff"],
    company: "company B",
    description: "Cloud bread VHS hell of banjo bi",
    category: "toys",
    shipping: true,
    gen: "toys",
    stock: 5,
    reviews: 25,
    stars: 2.5,
    featured: false,
  },
  {
    id: 7,
    name: "tops 001",
    price: 25000,
    image: `${top1}`,
    colors: ["#ff0000", "#00ff00", "#0000ff"],
    company: "company A",
    description: "Cloud bread VHS hell of banjo bi",
    category: "tops",
    shipping: true,
    gen: "female",
    stock: 5,
    reviews: 25,
    stars: 2.5,
  },
  {
    id: 8,
    name: "trouser 2",
    price: 145,
    image: `${tshirts2}`,
    colors: ["#ff0000", "#00ff00", "#0000ff"],
    company: "company A",
    description: "Cloud bread VHS hell of banjo bi",
    category: "trouser",
    shipping: true,
    gen: "male",
    stock: 5,
    reviews: 25,
    stars: 2.5,
  },
  {
    id: 9,
    name: "T-Shirt 3",
    price: 120,
    image: `${trowser3}`,
    colors: ["#ff0000", "#00ff00", "#0000ff"],
    company: "company A",
    description: "Cloud bread VHS hell of banjo bi",
    category: "T-shirt",
    shipping: false,
    gen: "male",
    stock: 5,
    reviews: 25,
    stars: 2.5,
  },
  {
    id: 10,
    name: "skirt 001",
    price: 14500,
    image: `${skirt1}`,
    colors: ["#ff0000", "#00ff00", "#0000ff"],
    company: "company A",
    description: "Cloud bread VHS hell of banjo bi",
    category: "skirt",
    shipping: true,
    gen: "female",
    stock: 5,
    reviews: 25,
    stars: 2.5,
  },
  {
    id: 11,
    name: "skirt 002",
    price: 25000,
    image: `${skirt2}`,
    colors: ["#ff0000", "#00ff00", "#0000ff"],
    company: "company C",
    description: "Cloud bread VHS hell of banjo bi",
    category: "skirt",
    shipping: false,
    gen: "female",
    stock: 5,
    reviews: 25,
    stars: 2.5,
  },
  {
    id: 12,
    name: "trouser 3",
    price: 120,
    image: `${tshirts3}`,
    colors: ["#ff0000", "#00ff00", "#0000ff"],
    company: "company C",
    description: "Cloud bread VHS hell of banjo bi",
    category: "trouser",
    shipping: true,
    gen: "male",
    stock: 5,
    reviews: 5,
    stars: 3.5,
  },
  {
    id: 13,
    name: "T-Shirt 4",
    price: 130,
    image: `${trowser4}`,
    colors: ["#ff0000", "#00ff00", "#0000ff"],
    company: "company A",
    description: "Cloud bread VHS hell of banjo bi",
    category: "T-shirt",
    shipping: true,
    gen: "male",
    stock: 12,
    reviews: 25,
    stars: 2.5,
  },
  {
    id: 14,
    name: "short 002",
    price: 25000,
    image: `${short2}`,
    colors: ["#ff0000", "#00ff00", "#0000ff"],
    company: "company A",
    description: "Cloud bread VHS hell of banjo bi",
    category: "short",
    shipping: true,
    gen: "male",
    stock: 12,
    reviews: 25,
    stars: 2.5,
  },
  {
    id: 15,
    name: "short 003",
    price: 25000,
    image: `${short3}`,
    colors: ["#ff0000", "#00ff00", "#0000ff"],
    company: "company A",
    description: "Cloud bread VHS hell of banjo bi",
    category: "short",
    shipping: true,
    gen: "male",
    stock: 12,
    reviews: 25,
    stars: 2.5,
  },
  {
    id: 16,
    name: "trouser 004",
    price: 100,
    image: `${tshirts4}`,
    colors: ["#ff0000", "#00ff00", "#0000ff"],
    company: "company A",
    description: "Cloud bread VHS hell of banjo bi",
    category: "trouser",
    shipping: true,
    gen: "male",
    stock: 12,
    reviews: 25,
    stars: 2.5,
  },
  {
    id: 17,
    name: "T-Shirt 5",
    price: 140,
    image: `${trowser5}`,
    colors: ["#ff0000", "#00ff00", "#0000ff"],
    company: "company A",
    description: "Cloud bread VHS hell of banjo bi",
    category: "T-shirt",
    shipping: false,
    gen: "male",
    stock: 12,
    reviews: 25,
    stars: 2.5,
  },
  {
    id: 18,
    name: "short 006",
    price: 25000,
    image: `${short6}`,
    colors: ["#ff0000", "#00ff00", "#0000ff"],
    company: "company A",
    description: "Cloud bread VHS hell of banjo bi",
    category: "short",
    shipping: true,
    gen: "female",
    stock: 12,
    reviews: 25,
    stars: 2.5,
  },
  {
    id: 19,
    name: "pant 001",
    price: 35000,
    image: `${pant1}`,
    colors: ["#ff0000", "#00ff00", "#0000ff"],
    company: "company A",
    description: "Cloud bread VHS hell of banjo bi",
    category: "pants",
    shipping: true,
    gen: "female",
    stock: 15,
    reviews: 26,
    stars: 3.5,
  },
  {
    id: 20,
    name: "trouser 002",
    price: 150,
    image: `${tshirts5}`,
    colors: ["#ff0000", "#00ff00", "#0000ff"],
    company: "company A",
    description: "Cloud bread VHS hell of banjo bi",
    category: "trouser",
    shipping: true,
    gen: "male",
    stock: 15,
    reviews: 26,
    stars: 3.5,
  },
  {
    id: 21,
    name: "T-Shirt 6",
    price: 150,
    image: `${trowser6}`,
    colors: ["#ff0000", "#00ff00", "#0000ff"],
    company: "company A",
    description: "Cloud bread VHS hell of banjo bi",
    category: "T-shirt",
    shipping: false,
    gen: "male",
    stock: 15,
    reviews: 26,
    stars: 3.5,
  },
  {
    id: 22,
    name: "formal shirt 001",
    price: 45000,
    image: `${formalshirt1}`,
    colors: ["#ff0000", "#00ff00", "#0000ff"],
    company: "company A",
    description: "Cloud bread VHS hell of banjo bi",
    category: "formal-shirt",
    shipping: true,
    gen: "male",
    stock: 17,
    reviews: 5,
    stars: 4.5,
  },
  {
    id: 23,
    name: "formal shirt 002",
    price: 23000,
    image: `${formalshirt2}`,
    colors: ["#ff0000", "#00ff00", "#0000ff"],
    company: "company C",
    description: "Cloud bread VHS hell of banjo bi",
    category: "formal-shirt",
    shipping: true,
    gen: "male",
    stock: 17,
    reviews: 5,
    stars: 4.5,
  },
  {
    id: 24,
    name: "trouser 003",
    price: 130,
    image: `${tshirts6}`,
    colors: ["#ff0000", "#00ff00", "#0000ff"],
    company: "company C",
    description: "Cloud bread VHS hell of banjo bi",
    category: "trouser",
    shipping: true,
    gen: "male",
    stock: 17,
    reviews: 5,
    stars: 4.5,
  },
  {
    id: 25,
    name: "dress 001",
    price: 70000,
    image: `${dress1}`,
    colors: ["#ff0000", "#00ff00", "#0000ff"],
    company: "company A",
    description: "Cloud bread VHS hell of banjo bi",
    category: "dress",
    shipping: true,
    gen: "female",
    stock: 17,
    reviews: 5,
    stars: 4.5,
  },
  {
    id: 26,
    name: "dress 002",
    price: 80000,
    image: `${dress2}`,
    colors: ["#ff0000", "#00ff00", "#0000ff"],
    company: "company A",
    description: "Cloud bread VHS hell of banjo bi",
    category: "dress",
    shipping: true,
    gen: "female",
    stock: 17,
    reviews: 5,
    stars: 4.5,
  },
  {
    id: 27,
    name: "dress 003",
    price: 70000,
    image: `${dress3}`,
    colors: ["#ff0000", "#00ff00", "#0000ff"],
    company: "company B",
    description: "Cloud bread VHS hell of banjo bi",
    category: "dress",
    shipping: true,
    gen: "female",
    stock: 17,
    reviews: 5,
    stars: 4.5,
  },
  {
    id: 28,
    name: "denim 001",
    price: 45000,
    image: `${denim1}`,
    colors: ["#ff0000", "#00ff00", "#0000ff"],
    company: "company A",
    description: "Cloud bread VHS hell of banjo bi",
    category: "denim",
    shipping: true,
    gen: "male",
    stock: 17,
    reviews: 5,
    stars: 4.5,
  },
  {
    id: 29,
    name: "denim 002",
    price: 45000,
    image: `${denim2}`,
    colors: ["#ff0000", "#00ff00", "#0000ff"],
    company: "company B",
    description: "Cloud bread VHS hell of banjo bi",
    category: "denim",
    shipping: true,
    gen: "male",
    stock: 17,
    reviews: 5,
    stars: 4.5,
  },
  {
    id: 30,
    name: "denim 003",
    price: 50000,
    image: `${denim3}`,
    colors: ["#ff0000", "#00ff00", "#0000ff"],
    company: "company C",
    description: "Cloud bread VHS hell of banjo bi",
    category: "denim",
    shipping: true,
    gen: "male",
    stock: 17,
    reviews: 5,
    stars: 4.5,
  },
  {
    id: 31,
    name: "denim 004",
    price: 25000,
    image: `${denim4}`,
    colors: ["#ff0000", "#00ff00", "#0000ff"],
    company: "company A",
    description: "Cloud bread VHS hell of banjo bi",
    category: "denim",
    shipping: true,
    gen: "female",
    stock: 17,
    reviews: 5,
    stars: 4.5,
  },
  {
    id: 32,
    name: "denim 005",
    price: 89000,
    image: `${denim5}`,
    colors: ["#ff0000", "#00ff00", "#0000ff"],
    company: "company C",
    description: "Cloud bread VHS hell of banjo bi",
    category: "denim",
    shipping: true,
    gen: "female",
    stock: 17,
    reviews: 5,
    stars: 4.5,
  },
  {
    id: 33,
    name: "denim 006",
    price: 45000,
    image: `${denim6}`,
    colors: ["#ff0000", "#00ff00", "#0000ff"],
    company: "company C",
    description: "Cloud bread VHS hell of banjo bi",
    category: "denim",
    shipping: true,
    gen: "female",
    stock: 17,
    reviews: 5,
    stars: 4.5,
  },
  {
    id: 34,
    name: "casual shirt 001",
    price: 45000,
    image: `${casualshirt1}`,
    colors: ["#ff0000", "#00ff00", "#0000ff"],
    company: "company A",
    description: "Cloud bread VHS hell of banjo bi",
    category: "casual-shirt",
    shipping: true,
    gen: "male",
    stock: 17,
    reviews: 5,
    stars: 4.5,
  },
  {
    id: 35,
    name: "casual shirt 002",
    price: 25000,
    image: `${casualshirt2}`,
    colors: ["#ff0000", "#00ff00", "#0000ff"],
    company: "company C",
    description: "Cloud bread VHS hell of banjo bi",
    category: "casual-shirt",
    shipping: true,
    gen: "male",
    stock: 17,
    reviews: 5,
    stars: 4.5,
  },
  {
    id: 36,
    name: "casual shirt 003",
    price: 38000,
    image: `${casualshirt3}`,
    colors: ["#ff0000", "#00ff00", "#0000ff"],
    company: "company A",
    description: "Cloud bread VHS hell of banjo bi",
    category: "casual-shirt",
    shipping: true,
    gen: "male",
    stock: 17,
    reviews: 5,
    stars: 4.5,
  },
  {
    id: 37,
    name: "casual pants 001",
    price: 45000,
    image: `${casualpant1}`,
    colors: ["#ff0000", "#00ff00", "#0000ff"],
    company: "company B",
    description: "Cloud bread VHS hell of banjo bi",
    category: "casual-pants",
    shipping: true,
    gen: "male",
    stock: 17,
    reviews: 5,
    stars: 4.5,
  },
  {
    id: 38,
    name: "casual pants 002",
    price: 38000,
    image: `${casualpant2}`,
    colors: ["#ff0000", "#00ff00", "#0000ff"],
    company: "company C",
    description: "Cloud bread VHS hell of banjo bi",
    category: "casual-pants",
    shipping: true,
    gen: "male",
    stock: 17,
    reviews: 5,
    stars: 4.5,
  },
  {
    id: 39,
    name: "casual pants 003",
    price: 45000,
    image: `${casualpant3}`,
    colors: ["#ff0000", "#00ff00", "#0000ff"],
    company: "company A",
    description: "Cloud bread VHS hell of banjo bi",
    category: "casual-pants",
    shipping: true,
    gen: "male",
    stock: 17,
    reviews: 5,
    stars: 4.5,
  },
  {
    id: 40,
    name: "t shirt 001",
    price: 18000,
    image: `${tshirt1}`,
    colors: ["#ff0000", "#00ff00", "#0000ff"],
    company: "company C",
    description: "Cloud bread VHS hell of banjo bi",
    category: "t-shirt",
    shipping: true,
    gen: "male",
    stock: 17,
    reviews: 5,
    stars: 4.5,
  },
  {
    id: 41,
    name: "t shirt 002",
    price: 25000,
    image: `${tshirt2}`,
    colors: ["#ff0000", "#00ff00", "#0000ff"],
    company: "company B",
    description: "Cloud bread VHS hell of banjo bi",
    category: "t-shirt",
    shipping: true,
    gen: "male",
    stock: 17,
    reviews: 5,
    stars: 4.5,
  },
  {
    id: 42,
    name: "t shirt 003",
    price: 15000,
    image: `${tshirt3}`,
    colors: ["#ff0000", "#00ff00", "#0000ff"],
    company: "company B",
    description: "Cloud bread VHS hell of banjo bi",
    category: "t-shirt",
    shipping: true,
    gen: "male",
    stock: 17,
    reviews: 5,
    stars: 4.5,
  },
  {
    id: 43,
    name: "t shirt 004",
    price: 34000,
    image: `${tshirt4}`,
    colors: ["#ff0000", "#00ff00", "#0000ff"],
    company: "company C",
    description: "Cloud bread VHS hell of banjo bi",
    category: "t-shirt",
    shipping: true,
    gen: "female",
    stock: 17,
    reviews: 5,
    stars: 4.5,
  },
  {
    id: 44,
    name: "t shirt 005",
    price: 45000,
    image: `${tshirt5}`,
    colors: ["#ff0000", "#00ff00", "#0000ff"],
    company: "company B",
    description: "Cloud bread VHS hell of banjo bi",
    category: "t-shirt",
    shipping: true,
    gen: "female",
    stock: 17,
    reviews: 5,
    stars: 4.5,
  },
  {
    id: 45,
    name: "t shirt 006",
    price: 38000,
    image: `${tshirt6}`,
    colors: ["#ff0000", "#00ff00", "#0000ff"],
    company: "company B",
    description: "Cloud bread VHS hell of banjo bi",
    category: "t-shirt",
    shipping: true,
    gen: "female",
    stock: 17,
    reviews: 5,
    stars: 4.5,
  },
];
