import Navbar from "./components/navbar";

export default function App() {
  return (
    <h1 className="text-xl">
      <Navbar />
      <section>
        <div className="grid grid-rows-2 lg:grid-cols-2 gap-4 p-4">
          <div className="text-white p-4 flex items-center justify-center flex-col h-[600px]">
            <h1 className="text-4xl font-bold">Augment Technology</h1>
            <h1 className="text-4xl font-bold">Advance Humanity</h1>
            <p className="text-sm mt-8">
              Augmented technology, encompassing fields such as augmented
              reality (AR), virtual reality(VR), artificial intelligence (AI),
              and wearable tech, is transforming the way humans interact with
              the world. These innovations are not just enhancing our daily
              lives but are also pushing the boundaries of what is possible in
              various sectors, including healthcare, education, industry, and
              entertainment. Augmented technology is revolutionizing healthcare by providing more 
              precise and personalized treatments. AR and VR are being used for surgical 
              training and planning, allowing surgeons to practice and visualize complex 
              procedures in a risk-free environment. AI-driven diagnostics and wearable 
              health monitors are enabling early detection of diseases and continuous health 
              monitoring, leading to better
            </p>
            <button className="border-2 border-white p-3 mt-8">Learn More</button>
          </div>
          <div className="p-4"></div>
        </div>
      </section>
    </h1>
  );
}
