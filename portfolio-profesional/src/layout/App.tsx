import bannerUrl from "@/assets/images/Banner.svg?url";

export default function App() {
  return (
    <div
      className="relative h-screen w-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${bannerUrl})` }}
    >
      <div className="inset-0 flex items-center justify-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white text-center drop-shadow-lg">
          Welcome to my Portfolio
        </h1>
      </div>
    </div>
  );
}
