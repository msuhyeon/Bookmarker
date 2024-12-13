import MainBanner from "@/components/home/MainBanner";
import Navigation from "@/components/home/Navigation";
import ContentsList from "@/components/common/ContentsList";

export default function Home() {
  return (
    <div className="container mx-auto px-4">
      <MainBanner />
      <Navigation />
      <ContentsList />
    </div>
  );
}
