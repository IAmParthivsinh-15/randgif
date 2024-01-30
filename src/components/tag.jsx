import { useEffect, useState } from "react";
import "./tag.css";
import Loader from "./loader";
function Tag() {
  const [Gif, setGif] = useState("");
  const [tag, setTag] = useState("car");
  const [loading, setLoading] = useState(false);

  async function fetchData() {
    setLoading(true);
    const url = `https://api.giphy.com/v1/gifs/random?api_key=vwwjzK5fxuC2Vp2JZH0mNRSDke8grb0H&tag=${tag}`;
    try {
      const response = await fetch(url);
      const data = await response.json();
      // console.log(data);
      const imgSrc = data.data.images.downsized_large.url;
      // console.log(imgSrc);
      setGif(imgSrc);
      setLoading(false);
    } catch (err) {
      alert("Error Fetching Data");
    }
  }

  function handleClick() {
    fetchData();
  }

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      <div className="container">
        <h2>{tag}'s GiF</h2>
        {loading ? <Loader></Loader> : <img src={Gif} className="img"></img>}
        <input
          value={tag}
          onChange={(event) => setTag(event.target.value)}
          className="ip"
        ></input>
        <button className="btn" onClick={handleClick}>
          Generate
        </button>
      </div>
    </>
  );
}

export default Tag;
