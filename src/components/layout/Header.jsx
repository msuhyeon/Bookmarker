import Link from "next/link";
import Image from "next/image";
import logoImage from "/public/images/logo/logo_header.png";

export default function Header() {
  return (
    // <div className="min-w-lg flex justify-between px-20 py-6">
    <div className="flex w-full min-w-[1200px] justify-between px-4 py-6 lg:mx-auto lg:w-[1200px]">
      <Image
        className="object-contain"
        src={logoImage}
        alt="logo image"
        width={150}
        height={95}
        layout="intrinsic"
      />
      <nav>
        <ul className="flex gap-x-4">
          <li>
            <Link href="#">TOP50</Link>
          </li>
          <li>
            <Link href="#">무료작</Link>
          </li>
          <li>
            <Link href="#">유료작</Link>
          </li>
        </ul>
      </nav>
      <ul className="menu-list flex gap-x-3">
        <li>검색</li>
        <li>알림</li>
        <li>마이페이지</li>
      </ul>
    </div>
  );
}
