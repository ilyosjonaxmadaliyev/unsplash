import React from "react";

function Loader({ item }) {
  return [...Array(item).keys()].map((_, idx) => (
    <div key={idx} className="animate-pulse">
      <div className="bg-gray-500 h-60"></div>
    </div>
  ));
}

export default Loader;
