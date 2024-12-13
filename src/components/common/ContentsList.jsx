"use client";

import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import HorizontalCard from "./HorizontalCard";

export default function ContentsList() {
  return (
    <Splide
      aria-label="Webtoon cover Images"
      options={{
        perMove: 1,
        perPage: 1,
        focus: "center",
        height: 1000,
        rewind: true,
        width: "100%",
        type: "loop",
        interval: 2000,
      }}
    >
      <SplideSlide>
        <div className="flex w-full flex-nowrap gap-2 overflow-x-auto">
          <HorizontalCard />
          <HorizontalCard />
          <HorizontalCard />
          <HorizontalCard />
          <HorizontalCard />
          <HorizontalCard />
          <HorizontalCard />
        </div>
      </SplideSlide>
    </Splide>
  );
}
