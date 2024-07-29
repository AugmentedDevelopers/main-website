import { useState } from "react";
import Navbar from "./components/navbar";
import LearnMoreBtn from "./components/learnMoreBtn";

export default function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Navbar isOpen={isOpen} setIsOpen={setIsOpen} />
      <div
        onClick={() => setIsOpen(!isOpen)}
        className={`z-10 items-end pr-6 lg:hidden fixed right-0 w-[170px] pt-24 text-xl space-y-12 bg-gray-200 opacity-90  min-h-screen ${
          isOpen ? "flex flex-col animate-slideDown" : "hidden"
        }`}
      >
        <a className={`underline-animation w-fit`} href="#">
          Home
        </a>
        <a className="underline-animation w-fit" href="#">
          About
        </a>
        <a className="underline-animation w-fit" href="#">
          Services
        </a>
        <a className="underline-animation w-fit" href="#">
          Contact Us
        </a>
      </div>
      <main className="min-h-screen pt-[48px]">
        <section className="grid grid-rows-2 lg:grid-rows-none lg:grid-cols-2 gap-4 p-4 h-full">
          <div className="text-white p-4 flex items-center justify-center flex-col min-h-[600px] h-full">
            <h1 className="text-4xl font-bold animate-slidein text-gradient-opacity">Augment Technology</h1>
            <h1 className="text-4xl font-bold animate-slidein text-gradient-opacity">Advance Humanity</h1>
            <p className="text-sm mt-8 text-center animate-slidein">
              Augmented technology, encompassing fields such as augmented
              reality (AR), virtual reality (VR), artificial intelligence (AI),
              and wearable tech, is transforming the way humans interact with
              the world. These innovations are not just enhancing our daily
              lives but are also pushing the boundaries of what is possible in
              various sectors, including healthcare, education, industry, and
              entertainment. Augmented technology is revolutionizing healthcare
              by providing more precise and personalized treatments. AR and VR
              are being used for surgical training and planning, allowing
              surgeons to practice and visualize complex procedures in a
              risk-free environment. AI-driven diagnostics and wearable health
              monitors are enabling early detection of diseases and continuous
              health monitoring, leading to better outcomes.
            </p>
            <LearnMoreBtn/>
          </div>
          {/* place the latest products below */}
          <div className="p-4 h-full"></div>
        </section>
      </main>
    </>
  );
}
