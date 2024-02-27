import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Favorite from "./components/Favorite";
import Model from "./components/Model";
import Sponsor from "./components/Sponsor";
import Footer from "./components/Footer";
import BackToTopButton from "./components/BackToTopButton";

export default function App() {
  return (
    <>
      <Header />
      <main className="main">
        <Home />
        <About />
        <Favorite />
        <Model />
        <Sponsor />
      </main>
      <Footer />
      <BackToTopButton />
    </>
  );
}
