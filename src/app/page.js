"use client";

import React, { useEffect, useState } from "react";
import "./page.css";

export default function Home() {
  const Corolla = [
    "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.roadandtrack.com%2Fcar-culture%2Fbuying-maintenance%2Fg6710%2Fcheap-sports-cars%2F&psig=AOvVaw31op39zUC48Y0e95NcUVOW&ust=1697853571179000&source=images&cd=vfe&opi=89978449&ved=0CBAQjRxqFwoTCODjz8nDg4IDFQAAAAAdAAAAABAE",
    "'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.freepik.com%2Fphotos%2Fcar&psig=AOvVaw31op39zUC48Y0e95NcUVOW&ust=1697853571179000&source=images&cd=vfe&opi=89978449&ved=0CBAQjRxqFwoTCODjz8nDg4IDFQAAAAAdAAAAABAJ",
    "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.mynrma.com.au%2Fcars-and-driving%2Fbuying-a-car%2Ffeatures%2Fbest-cars-2021&psig=AOvVaw31op39zUC48Y0e95NcUVOW&ust=1697853571179000&source=images&cd=vfe&opi=89978449&ved=0CBAQjRxqFwoTCODjz8nDg4IDFQAAAAAdAAAAABAi",
  ];
  console.log(Corolla);
  let count = 0;
  const [car, setCar] = useState(Corolla[count]);
  const [zoomE, setzoomE] = useState(false);

  const handleChange = () => {
    setCar(Corolla[count + 1]);
    if (count === Corolla.length - 2) {
      count = -1;
    } else {
      count = count + 1;
    }

    console.log(count);
  };
  useEffect(() => {
    const interval = setInterval(() => {
      handleChange();
    }, 5010);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="overflow">
        <div key={{ car }} className="slideshow" style={{ width: "75%" }}>
          <h1>{car}</h1>
          <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.roadandtrack.com%2Fcar-culture%2Fbuying-maintenance%2Fg6710%2Fcheap-sports-cars%2F&psig=AOvVaw31op39zUC48Y0e95NcUVOW&ust=1697853571179000&source=images&cd=vfe&opi=89978449&ved=0CBAQjRxqFwoTCODjz8nDg4IDFQAAAAAdAAAAABAE"  alt=""></img>          
          <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.roadandtrack.com%2Fcar-culture%2Fbuying-maintenance%2Fg6710%2Fcheap-sports-cars%2F&psig=AOvVaw31op39zUC48Y0e95NcUVOW&ust=1697853571179000&source=images&cd=vfe&opi=89978449&ved=0CBAQjRxqFwoTCODjz8nDg4IDFQAAAAAdAAAAABAE" className="slideshowPic zoom" alt=""></img>
          <h1>Test</h1>
        </div>
      </div>
    </>
  );
}
