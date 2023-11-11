import "./App.css";
import Home from "./pages/Home";

const App = () => {
  return (
    <main className="relative w-full h-screen mx-auto">
      <div className="px-6 max-w-7xl absolute inset-0 mx-auto flex flex-row items-start top-[30px] lg:top-[60px] md:justify-center">
        <Home />
      </div>
    </main>
  );
};

export default App;
