
import About from "./components/About";
import Projects from "./components/Project";
import Footer from "./components/Footer";
import Header from "./components/Header";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header className="appTitle">
        <h1>Parker Justice React</h1>
      </Header>
      <About/>
      <Projects/>
      <Footer/>
    </div>
  );
}

export default App;

