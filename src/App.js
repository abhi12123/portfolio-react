import logo from "./logo.svg";
import "./App.scss";
import Mode from "./components/Mode";
import Navbar from "./components/Navbar";
import Content from "./components/Content";
import Email from "./components/Email";

function App() {
  return (
    <div className="App font-primary">
      <nav>
        {/* <Navbar /> */}
      </nav>
      <main>
        <Content/>
      </main>
      <Mode />
      {/* <Email/> */}
    </div>
  );
}

export default App;
