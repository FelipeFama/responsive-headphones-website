import About from "./components/About";
import Favorite from "./components/Favorite";
import Header from "./components/Header";
import Home from "./components/Home";

export default function App() {
  return (
    <>
      <Header />
      <main className="main">
        <Home />
        <About />
        <Favorite />
      </main>
    </>
  );
}
