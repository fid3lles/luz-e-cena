import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Header from "./components/Header";
import MovieSection from "./components/MovieSection";
import Newsletter from "./components/Newsletter";

function App() {
  return (
    <>
      <Header />
      <Banner src="../public/Imagens/Banner Desktop.png" alt="Banner" />
      <MovieSection />
      <Banner src="../public/Imagens/Banner Combo Desktop.png" alt="Combo" />
      <Newsletter />
      <Footer />
    </>
  );
}

export default App;
