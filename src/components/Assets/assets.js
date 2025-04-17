import p_img1 from "./image1.png";
import p_img2_1 from "./image31.jpg";
import p_img2_2 from "./image32.jpg";
import p_img2_3 from "./image37.jpg";
import p_img2_4 from "./image50.jpg";
import P_img2_5 from "./image33.jpg";
import p_img2_6 from "./image34.jpg";
import p_img3 from "./image2.jpg";
import p_img4 from "./image3.png";
import p_img5 from "./image4.jpg";
import p_img6 from "./image5.jpg";
import p_img7 from "./image6.png";

import p_img12 from "./image7.jpg";
import p_img13 from "./hero1.jpg";
import p_img14 from "./heros.jpg"
import p_img15 from "./boy-wears.jpg";
import p_img16 from "./sleeves.jpg";
import p_img17 from "./Dreamstime.jpg";
import p_img18 from "./sweater.jpg";
import p_img19 from "./woove.jpg";
// import p_img20 from "./";

import logo from "./favicon4.ico";
import cart_icon from "./cart.png";
import bin_icon from "./delete.png";
import cancel_icon from "./cancel.png";
import hero_img from "./hero.png";
import dropdown_icon from "./dropdown.png";
import exchange_icon from "./exchange_icon.png";
import profile_icon from "./profile.png";
import star_icon from "./star.png";
import quality_icon from "./quality.jpg";
import search_icon from "./search_icon2.png";
import support_icon from "./support_icon-2.png";
//import star_dull_icon from "./";
import support_img from "./support.png";
import menuIcon from "./menuIcon.png";
import about_img from "./about.png";
import contact_img from "./contact-1.png";
import contact_env from "./contact-2.jpg";
import contact_location from "./contact-3.png";
//import stripe_logo from "./";
//import cross_icon from "./";
import razorpay_logo from "./razorpay.png";

export const assets = {
  logo,
  hero_img,
  cart_icon,
  cancel_icon,
  bin_icon,
  dropdown_icon,
  exchange_icon,
  profile_icon,
  star_icon,
  support_icon,
  //star_dull_icon,
  quality_icon,
  search_icon,
  support_img,
  menuIcon,
  about_img,
  contact_img,
  contact_env,
  contact_location,
  //stripe_logo,
  //cross_icon,
  razorpay_logo,
};


export const products = [
  {
    id: 1,
    name: "A Complete Body Tight shirt and Jeans",
    description: "A Complete wears for men",
    price: 100,
    image: [p_img1],
    category: "Men Wear",
    subCategory: "Men body Wears",
    size: ["S", "M", "L", "XL"],
    date: document.writeln(new Date()),
    bestSeller: false,
  },
  {
    id: 2,
    name: "Long Sleeves Top and Browse",
    description: "Office Wears For Ladies",
    price: 100,
    image: [p_img2_1, p_img2_2, p_img2_3, p_img2_4, P_img2_5],
    category: "Men Wear",
    subCategory: "",
    size: ["S", "M", "L", "XL"],
    date: document.writeln(new Date()),
    bestSeller: false,
  },
  {
    id: 3,
    name: "Suit and Yellow Vest Designers",
    description: "Men outfit wears and comfort design.",
    price: 100,
    image: [p_img3, p_img2_6],
    category: "Men Wear",
    subCategory: "",
    size: ["S", "M", "L", "XL"],
    date: document.writeln(new Date()),
    bestSeller: false,
  },
  {
    id: 4,
    name: "",
    description: "",
    price: 100,
    image: [p_img4],
    category: "Men Wear",
    subCategory: "",
    size: ["S", "M", "L", "XL"],
    date: document.writeln(new Date()),
    bestSeller: false,
  },
  {
    id: 5,
    name: "",
    description: "",
    price: 100,
    image: [p_img5],
    category: "Men Wear",
    subCategory: "",
    size: ["S", "M", "L", "XL"],
    date: document.writeln(new Date()),
    bestSeller: false,
  },
  {
    id: 6,
    name: "",
    description: "",
    price: 100,
    image: [p_img6],
    category: "Men Wear",
    subCategory: "",
    size: ["S", "M", "L", "XL"],
    date: document.writeln(new Date()),
    bestSeller: false,
  },
  {
    id: 7,
    name: "",
    description: "",
    price: 100,
    image: [p_img3],
    category: "Men Wear",
    subCategory: "",
    size: ["S", "M", "L", "XL"],
    date: document.writeln(new Date()),
    bestSeller: false,
  },
  {
    id: 8,
    name: "",
    description: "",
    price: 100,
    image: [p_img4],
    category: "Men Wear",
    subCategory: "",
    size: ["S", "M", "L", "XL"],
    date: document.writeln(new Date()),
    bestSeller: false,
  },
  {
    id: 9,
    name: "",
    description: "",
    price: 100,
    image: [p_img5],
    category: "Men Wear",
    subCategory: "",
    size: ["S", "M", "L", "XL"],
    date: document.writeln(new Date()),
    bestSeller: false,
  },
  {
    id: 10,
    name: "",
    description: "",
    price: 100,
    image: [p_img6],
    category: "Men Wear",
    subCategory: "",
    size: ["S", "M", "L", "XL"],
    date: document.writeln(new Date()),
    bestSeller: false,
  },
  {
    id: 11,
    name: "",
    description: "",
    price: 100,
    image: [p_img7],
    category: "Men Wear",
    subCategory: "",
    size: ["S", "M", "L", "XL"],
    date: document.writeln(new Date()),
    bestSeller: true,
  },
  {
    id: 12,
    name: "Top and Panties For Ladies",
    description: "Under wears and Top for women",
    price: 100,
    image: [p_img12],
    category: "Women Wears",
    subCategory: "",
    size: ["S", "M", "L", "XL"],
    date: document.writeln(new Date()),
    bestSeller: true,
  },
  {
    id: 13,
    name: "Trouser For Ladies Designers",
    description: "A complete Combination wears and Top for women",
    price: 100,
    image: [p_img13],
    category: "Women Wears",
    subCategory: "",
    size: ["S", "M", "L", "XL"],
    date: document.writeln(new Date()),
    bestSeller: true,
  },
  {
    id: 14,
    name: "Long Gown For Ladies",
    description: "Long Gown for women",
    price: 100,
    image: [p_img14],
    category: "Women Wears",
    subCategory: "",
    size: ["S", "M", "L", "XL"],
    date: document.writeln(new Date()),
    bestSeller: true,
  },
  {
    id: 15,
    name: "Long Gown For Ladies",
    description: "Long Gown for women",
    price: 100,
    image: [p_img15],
    category: "Women Wears",
    subCategory: "",
    size: ["S", "M", "L", "XL"],
    date: document.writeln(new Date()),
    bestSeller: true,
  },
  {
    id: 16,
    name: "Long Gown For Ladies",
    description: "Long Gown for women",
    price: 100,
    image: [p_img16],
    category: "Women Wears",
    subCategory: "",
    size: ["S", "M", "L", "XL"],
    date: document.writeln(new Date()),
    bestSeller: true,
  },
  {
    id: 17,
    name: "Long Gown For Ladies",
    description: "Long Gown for women",
    price: 100,
    image: [p_img17],
    category: "Women Wears",
    subCategory: "",
    size: ["S", "M", "L", "XL"],
    date: document.writeln(new Date()),
    bestSeller: true,
  },
  {
    id: 18,
    name: "Long Gown For Ladies",
    description: "Long Gown for women",
    price: 100,
    image: [p_img18],
    category: "Women Wears",
    subCategory: "",
    size: ["S", "M", "L", "XL"],
    date: document.writeln(new Date()),
    bestSeller: true,
  },
  {
    id: 19,
    name: "Long Gown For Ladies",
    description: "Long Gown for women",
    price: 100,
    image: [p_img19],
    category: "Women Wears",
    subCategory: "",
    size: ["S", "M", "L", "XL"],
    date: document.writeln(new Date()),
    bestSeller: true,
  },
];