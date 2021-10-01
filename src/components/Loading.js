import React from "react";
import gif1 from "../images/my/giphy.gif";

const Loading = () => {
  return (
    <div className="loading">
      <h4>rooms data loading...</h4>
      <img className="loadingGif" src={gif1} alt="loading" />
    </div>
  );
};

export default Loading;
