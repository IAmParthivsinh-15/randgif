import { useEffect, useState } from "react";
import "./RandGif.css";
function RandGif() {
  const [Gif, setGif] = useState("");

  async function fetchData() {
    setGif("");
    const url = `https://api.giphy.com/v1/gifs/random?api_key=vwwjzK5fxuC2Vp2JZH0mNRSDke8grb0H`;
    const response = await fetch(url);
    const data = await response.json();
    // console.log(data);
    const imgSrc = data.data.images.downsized_large.url;
    // console.log(imgSrc);
    setGif(imgSrc);
  }

  function handleClick() {
    fetchData();
  }

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      <div className="randgif">
        <h2> Random Gif </h2>
        <img src={Gif}></img>
        <button onClick={handleClick} className="btn">
          Generate
        </button>
      </div>
    </>
  );
}

export default RandGif;
