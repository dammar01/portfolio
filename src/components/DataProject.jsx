import mrt1 from "../assets/img/project/mrt-1.png";
import mrt2 from "../assets/img/project/mrt-2.png";
import mrt3 from "../assets/img/project/mrt-3.png";
import mrt4 from "../assets/img/project/mrt-4.png";
import mrt5 from "../assets/img/project/mrt-5.png";
import mrt_view from "../assets/img/project/mrt-view.jpg";

import tigeweb1 from "../assets/img/project/tigeweb-1.png";
import tigeweb2 from "../assets/img/project/tigeweb-2.png";
import tigeweb_view from "../assets/img/project/tigeweb-view.jpg";

import tekken8_api1 from "../assets/img/project/tekken8_api-1.png";
import tekken8_api2 from "../assets/img/project/tekken8_api-2.png";
import tekken8_api3 from "../assets/img/project/tekken8_api-3.png";
import tekken8_api_view from "../assets/img/project/tekken8_api-view.png";

import tekken_tactics1 from "../assets/img/project/tekken_tactics-1.png";
import tekken_tactics2 from "../assets/img/project/tekken_tactics-2.png";
import tekken_tactics3 from "../assets/img/project/tekken_tactics-3.png";
import tekken_tactics4 from "../assets/img/project/tekken_tactics-4.png";
import tekken_tactics5 from "../assets/img/project/tekken_tactics-5.png";
import tekken_tactics6 from "../assets/img/project/tekken_tactics-6.png";
import tekken_tactics_view from "../assets/img/project/tekken_tactics-view.png";

export const DATA_PROJECT = [
  {
    id: 1,
    tanggal: "29 January 2024",
    name: "MRT",
    img: [mrt1, mrt2, mrt3, mrt4, mrt5],
    view: mrt_view,
    isi: "Material Return Terpadu (MRT) Website is a platform for recording and managing data of items located in the main warehouse and other warehouses.",
    lang: ["Laravel", "SCSS", "jQuery"],
  },
  {
    id: 2,
    tanggal: "22 September 2023",
    name: "Tigeweb",
    img: [tigeweb1, tigeweb2],
    view: tigeweb_view,
    isi: "Tigeweb is a professional portfolio website showcasing the diverse projects and skills of Tigeweb. It highlights a range of web development and design work, demonstrating expertise in creating visually appealing and highly functional websites.",
    lang: ["Express JS", "Bootstrap", "React JS"],
    link: "https://tigeweb.com/",
  },
  {
    id: 3,
    tanggal: "9 January 2025",
    name: "Tekken Tactics",
    img: [tekken_tactics1, tekken_tactics2, tekken_tactics3, tekken_tactics4, tekken_tactics5, tekken_tactics6],
    view: tekken_tactics_view,
    isi: "Tekken Tactics is a Java-based desktop application designed to help Tekken enthusiasts manage and enhance their gameplay experience. This application allows users to store their custom combos, view movesheets for every character, and explore tier lists for strategic insights. It is developed as part of a Visual Programming coursework project.",
    lang: ["Java", "Swing"],
  },
  {
    id: 4,
    tanggal: "11 November 2024",
    name: "Tekken-8 API",
    img: [tekken8_api1, tekken8_api2, tekken8_api3],
    view: tekken8_api_view,
    isi: "This API provides Tekken 8 move data and notation generation tools, sourced from WavuWiki. It includes features to retrieve and search movesets, and a notation maker that detects starter frames and generates button notation images.",
    lang: ["Python", "FastAPI", "Docker"],
  },
];
