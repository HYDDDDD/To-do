import React from "react";
import { Item } from "../../model";
import SingleTodo from "./SingleTodo";

interface Props {
  items: Item[];
  setItems: React.Dispatch<React.SetStateAction<Item[]>>;
}

function TodoList({ items, setItems }: Props) {
  return (
    <div className="flex justify-evenly w-10/12 flex-wrap">
      {items.map((element) => (
        <SingleTodo
          key={element.id}
          item={element}
          items={items}
          setItems={setItems}
        />
      ))}
    </div>
  );
}

export default TodoList;
