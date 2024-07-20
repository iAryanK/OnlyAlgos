import Algos from "@/components/home/Algos";
import Hero from "@/components/home/Hero";

export default function Home() {
  return (
    <main className="max-w-6xl mx-auto relative">
      <div className="absolute top-0 -z-10 h-full w-full bg-white dark:bg-background ">
        <div className="absolute bottom-auto left-auto right-0 top-0 h-[500px] w-[500px] -translate-x-[30%] translate-y-[20%] rounded-full bg-[rgba(173,109,244,0.5)] opacity-50 blur-[80px]"></div>
      </div>

      <Hero />
      <Algos />
    </main>
  );
}
