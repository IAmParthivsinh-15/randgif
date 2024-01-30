import "./App.css";
import Heading from "./components/Heading";
import RandGif from "./components/RandGif";
import Tag from "./components/tag";

function App() {
  return (
    <>
      <div className="App">
        <Heading className="Heading"></Heading>
        <div className="sub">
          <RandGif></RandGif>
          <Tag></Tag>
        </div>
      </div>
    </>
  );
}

export default App;
