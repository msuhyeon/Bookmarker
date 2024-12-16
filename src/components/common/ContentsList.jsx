"use client";

import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import HorizontalCard from "./HorizontalCard";

export default function ContentsList() {
  return (
    <>
      <h2>조회수 누적 10000 돌파 작품</h2>
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
          <div className="grid grid-cols-4 place-content-center place-items-center gap-4">
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
    </>
  );
}
