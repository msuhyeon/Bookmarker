"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

export default function MainBanner() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const importAll = (r) => r.keys().map(r);
    const imageFiles = importAll(
      require.context("/public/images/banners", false, /\.webp$/),
    );
    setImages(imageFiles);
  }, []);

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
        {images.map((src, index) => (
          <SplideSlide>
            <Image
              className="rounded-md"
              key={index}
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
