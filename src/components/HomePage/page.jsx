import HeroSection from "./components/heroSection";
import LatestProduct from "./components/product";

const HomePage = () => {
  return (
    <main className="min-h-screen pt-[48px]">
      <section className="grid grid-rows-2 lg:grid-rows-none lg:grid-cols-2 gap-4 p-4 h-full">
        <HeroSection />
        <LatestProduct />
      </section>
    </main>
  );
};

export default HomePage;
