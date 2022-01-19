import React, { useState, useEffect } from "react";
import ItemsList from "./ItemsList";
import AddItem from "./AddItem";
import declineWord from "decline-word";

export default function Shop() {
  const [items, setItems] = useState(() => {
    if (!localStorage.getItem("items")) {
      return [];
    }
    return JSON.parse(localStorage.getItem("items"));
  });
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [valid, setValid] = useState("");

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items));
  }, [items]);

  useEffect(() => {
    if (items.length > 0) {
      document.title = `${items.length} ${declineWord(
        items.length,
        "товар",
        null,
        "а",
        "ов"
      )}`;
    } else {
      document.title = "Товары отсутствуют";
    }
  });

  function handleFormSubmit(event) {
    event.preventDefault();

    if (!name) {
      setValid("Введите название");
      return;
    }
    if (!desc) {
      setValid("Введите описание ");
      return;
    }
    setItems([
      ...items,
      {
        id: items.length + 1,
        name: name,
        desc: desc
      }
    ]);
    setName("");
    setDesc("");
    setValid("");
  }

  function handleNameChange(event) {
    setName(event.target.value);
  }

  function handleDescChange(event) {
    setDesc(event.target.value);
  }

  function handleDeleteClick(id) {
    setItems(items.filter((item) => item.id !== id));
  }

  return (
    <div className="grid grid-cols-1 gap-4 text-center">
      <AddItem
        name={name}
        desc={desc}
        valid={valid}
        onNameChange={handleNameChange}
        onDescChange={handleDescChange}
        onFormSubmit={handleFormSubmit}
      />
      <div>{items.length === 0 && <p>Добавьте первый товар</p>}</div>
      <ItemsList items={items} onDeleteClick={handleDeleteClick} />
    </div>
  );
}
