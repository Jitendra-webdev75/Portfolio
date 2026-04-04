import Hero from "./components/Hero";
import Nav from "./components/Nav";

function App() {
  return (
    <>
      <div className="main h-[100vh] w-[100vw] bg-gradient-to-b from-[#d1d0d0] via-[#87C6C1] to-[#3C3434]  flex flex-col items-center  gap-7">
        <Nav />
        <Hero />
      </div>
    </>
  );
}

export default App;
