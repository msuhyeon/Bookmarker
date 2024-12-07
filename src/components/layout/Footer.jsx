import Image from "next/image";
import logoImage from "/public/images/logo/logo_footer.png";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-100 bg-footer flex justify-between px-40 pb-20 pt-6">
      <div>
        <Image
          className="object-contain"
          src={logoImage}
          alt="logo image"
          width={150}
          height={95}
          layout="intrinsic"
        />
        <ul className="mt-3 flex gap-x-10 text-sm text-slate-200">
          <li>
            <Link href="#">이용약관</Link>
          </li>
          <li className="font-semibold underline">
            <Link href="#">개인정보취급방침</Link>
          </li>
          <li>
            <Link href="#">운영정책</Link>
          </li>
          <li>
            <Link href="#">고객센터</Link>
          </li>
        </ul>
        <div className="mt-4">
          <p className="flex gap-x-3 text-sm text-slate-300">
            <span>북마커</span>
            <span>대표: 맹수현 </span>
            <span>사업자 등록 번호: 123-45-67890</span>
          </p>
          <p className="mt-1 flex gap-x-5 text-sm text-slate-300">
            <span>통신판매업신고: 0000-대한민국A-0000</span>
            <span>
              대표전화: <tel>070-0000-0000</tel>
            </span>
            <span>
              이메일: <email>admin@bookmarker.com</email>
            </span>
          </p>
          <address className="mt-1 text-sm not-italic text-slate-300">
            경기 성남시 분당구 판교역로 160
          </address>
        </div>
      </div>
      <div className="flex flex-col">
        <strong className="text-slate-200">고객센터</strong>
        <tel className="text-xl text-slate-200">070-0000-0000</tel>
        <p className="text-xs text-slate-300">
          상담가능시간 평일 09:00 ~ 18:00 / 점심시간 12:00 ~ 13:00
        </p>
      </div>
    </footer>
  );
}
