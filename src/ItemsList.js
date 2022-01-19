import React from "react";
import Item from "./Item";

export default function ItemsList(props) {
  return (
      <div className="flex mb-4 justify-center">
          <div className="w-1/2">
            <ul className="divide-y">
              {props.items.map((item) => (
                <li className="mb-11" key={item.id}>
                  <Item info={item} />
                  <button
                    className="bg-red-500 hover:bg-red-700 text-white font-semibold py-2 px-4 border border-gray-400 rounded shadow"
                    onClick={() => props.onDeleteClick(item.id)}
                  >
                    Удалить
                  </button>
                </li>
              ))}
            </ul>
        </div>
      </div>
  );
}
