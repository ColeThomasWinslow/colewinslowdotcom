import "./App.css";
import Footer from "./Components/Navigation/Footer";
import NavBar from "./Components/Navigation/NavBar";
import Landing from "./Components/Pages/Landing/Landing";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Landing />
      <Footer />
    </div>
  );
}

export default App;
