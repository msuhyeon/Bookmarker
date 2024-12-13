export default function HorizontalCard() {
  return (
    <div className="flex h-[150px] w-[300px] overflow-hidden rounded-lg border-2 border-solid border-sky-500">
      <div className="bg-card w-28">이미지</div>
      <div className="flex flex-col justify-between p-2">
        <p>
          여왕님 만나서 반갑습니다
          <i className="bg-card ml-2 p-1 text-sm not-italic text-white">인기</i>
        </p>
        <p className="flex gap-2">
          <span className="text-genre">무협</span>
          <span className="text-genre">판타지</span>
        </p>
        <hr />
        <div>
          <span>작가넴</span>
        </div>
      </div>
    </div>
  );
}
