import "./App.css";
import "./input.css";
import "./output.css";
import FAQs from "./Pages/FAQs";
import Footer from "./Pages/Footer";
import Home from "./Pages/Home";
import Movies from "./Pages/Movies";

function App() {
  return (
    <div>
      <Home />
      <Movies />
      <FAQs />
      <Footer />
    </div>
  );
}

export default App;
