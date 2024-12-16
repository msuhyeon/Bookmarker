import MainBanner from "@/components/home/MainBanner";
import Navigation from "@/components/home/Navigation";
import ContentsList from "@/components/common/ContentsList";

export default function Home() {
  return (
    <div className="w-full min-w-[1200px] justify-between px-4 py-6 lg:mx-auto lg:w-[1200px]">
      <MainBanner />
      <Navigation />
      <ContentsList />
    </div>
  );
}
