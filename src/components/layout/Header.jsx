import Link from "next/link";
import Image from "next/image";
import logoImage from "/public/images/logo/logo_header.png";

export default function Header() {
  return (
    <div className="header p-4 bg-red-500 underline">
      <Image src={logoImage} alt="logo image" width={150} height={95} />
      <nav>
        <ul>
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
      <ul className="menu-list">
        <li>검색</li>
        <li>알림</li>
        <li>마이페이지</li>
      </ul>
    </div>
  );
}
