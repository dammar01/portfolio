import mrt1 from "../assets/img/project/mrt-1.png";
import mrt2 from "../assets/img/project/mrt-2.png";
import mrt3 from "../assets/img/project/mrt-3.png";
import mrt4 from "../assets/img/project/mrt-4.png";
import mrt5 from "../assets/img/project/mrt-5.png";
import mrt_view from "../assets/img/project/mrt-view.jpg";

import tigeweb1 from "../assets/img/project/tigeweb-1.png";
import tigeweb2 from "../assets/img/project/tigeweb-2.png";
import tigeweb_view from "../assets/img/project/tigeweb-view.jpg";

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
    lang: ["Express JS", "SCSS", "React JS"],
    link: "https://tigeweb.com/",
  },
];
