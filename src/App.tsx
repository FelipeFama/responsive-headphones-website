import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Favorite from "./components/Favorite";
import Model from "./components/Model";

export default function App() {
  return (
    <>
      <Header />
      <main className="main">
        <Home />
        <About />
        <Favorite />
        <Model />
      </main>
    </>
  );
}
