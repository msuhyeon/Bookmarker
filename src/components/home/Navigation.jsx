import Link from "next/link";

export default function Navigation() {
  return (
    <div className="align-center my-5 flex justify-center gap-6">
      <Link
        href="#"
        className="flex h-20 w-20 items-center justify-center rounded-full bg-slate-200"
      >
        <span className="text-md flex h-12 w-12 items-center justify-center text-[#18181b]">
          이벤트
        </span>
      </Link>
      <Link
        href="#"
        className="flex h-20 w-20 items-center justify-center rounded-full bg-slate-200"
      >
        <span className="text-md flex h-12 w-12 items-center justify-center text-[#18181b]">
          실시간 인기
        </span>
      </Link>
      <Link
        className="flex h-20 w-20 items-center justify-center rounded-full bg-slate-200"
        href="#"
      >
        <span className="text-md flex h-12 w-12 items-center justify-center text-[#18181b]">
          완결작
        </span>
      </Link>
      <Link
        className="flex h-20 w-20 items-center justify-center rounded-full bg-slate-200"
        href="#"
      >
        <span className="text-md flex h-12 w-12 items-center justify-center text-[#18181b]">
          Review
        </span>
      </Link>
    </div>
  );
}
