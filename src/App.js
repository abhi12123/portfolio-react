import logo from "./logo.svg";
import "./App.scss";
import Mode from "./components/Mode";
import Navbar from "./components/Navbar";
import Content from "./components/Content";

function App() {
  return (
    <div className="App">
      <nav>
        <Navbar />
      </nav>
      <main>
        <Content/>
      </main>
      <Mode />
    </div>
  );
}

export default App;
