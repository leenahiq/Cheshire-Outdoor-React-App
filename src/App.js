import "./App.css";
import Footer from "./components/footer";
import Gallery from "./components/gallery";
import Header from "./components/header";
import Main from "./components/main";
import Navbar from "./components/navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Main />
      <Gallery />
      <Footer />
    </div>
  );
}

export default App;
