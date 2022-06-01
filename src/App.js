import Container from "./Container";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Container />
      <Footer />
    </div>
  );
}

export default App;
