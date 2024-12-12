"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

export default function MainBanner() {
  const images = [
    "https://res.cloudinary.com/denwa7qem/image/upload/v1734008898/toon4_hxter6.webp",
    "https://res.cloudinary.com/denwa7qem/image/upload/v1734008898/toon2_v6hp3t.webp",
    "https://res.cloudinary.com/denwa7qem/image/upload/v1734008898/toon1_tfusjt.webp",
    "https://res.cloudinary.com/denwa7qem/image/upload/v1734008898/toon3_rzwea2.webp",
  ];

  //   TODO: 액티브 페이지 색상 변경
  //   .splide__pagination__page.is-active

  return (
    <div className="mt-2 flex justify-center">
      <Splide
        aria-label="Webtoon cover Images"
        options={{
          perMove: 1,
          perPage: 2.5,
          focus: "center",
          height: 300,
          rewind: true,
          width: "100%",
          gap: "1rem",
          type: "loop",
          interval: 2000,
          padding: "15%",
        }}
      >
        {images &&
          images.map((src, index) => (
            <SplideSlide key={index}>
              <Image
                className="rounded-md"
                src={src}
                alt={`Banner ${index + 1}`}
                width={600}
                height={300}
              />
            </SplideSlide>
          ))}
      </Splide>
    </div>
  );
}
