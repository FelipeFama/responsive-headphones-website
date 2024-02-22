import About from "./components/About";
import Header from "./components/Header";
import Home from "./components/Home";

export default function App() {
  return (
    <>
      <Header />
      <main className="main">
        <Home />
        <About />
      </main>
    </>
  );
}
