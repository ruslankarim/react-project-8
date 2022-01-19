import React, { useState } from "react";

export default function Item(props) {
  const [total, setTotal] = useState(0);

  const { info } = props;

  function handleAddClick() {
    setTotal(total + 1);
  }

  function handleRemoveClick() {
    if (total > 0) {
      setTotal(total - 1);
    }
  }

  if (!info) {
    return null;
  }

  return (
    <div className="">
      <div className="flex mb-4 mt-4">
        <h2 className="w-full font-sans">{info.name}</h2>
      </div>
      <div className="flex mb-4">
        <p className="w-full font-sans">{info.desc}</p>
      </div>
      <div className="flex mb-4">
        <button
          className="w-1/3 bg-white hover:bg-gray-100 text-gray-800 font-semibold py-1 px-1 border border-gray-400 rounded shadow"
          disabled={total === 0}
          onClick={handleRemoveClick}
        >
          -
        </button>
        <h3 className="w-1/3">{total ? total : ""}</h3>
        <button className="w-1/3 bg-white hover:bg-gray-100 text-gray-800 font-semibold py-1 px-1 border border-gray-400 rounded shadow"
                onClick={handleAddClick}>
          +
        </button>
      </div>
    </div>
  );
}
