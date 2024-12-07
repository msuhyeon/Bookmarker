import "./globals.css"
import Header from "@/components/layout/Header";

export const metadata = {
  title: "My bookshelf",
  description: "웹툰과 웹소설을 모두 즐길 수 있는 나의 책장"
}

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
