import React from "react";
import { Item } from "../../model";
import SingleTodo from "./SingleTodo";

interface Props {
  items: Item[];
  setItems: React.Dispatch<React.SetStateAction<Item[]>>;
}

function TodoList({ items, setItems }: Props) {
  return (
    <div className="flex mr-auto ml-auto w-11/12 mt-2 justify-between space-x-3 items-start max-sm:flex-col max-sm:space-y-3 max-sm:items-center max-sm:space-x-0">
      <div className="flex flex-col p-4 rounded-md bg-slate-900 justify-evenly w-11/12 flex-wrap">
        <span className="text-white text-lg font-semibold">Active Tasks</span>
        {items.map((element) => (
          <SingleTodo
            key={element.id}
            item={element}
            items={items}
            setItems={setItems}
          />
        ))}
      </div>
      <div className="flex flex-col p-4 rounded-md bg-slate-900 justify-evenly w-11/12 flex-wrap">
        <span className="text-white text-lg font-semibold">
          Completed Tasks
        </span>
        {items.map((element) => (
          <SingleTodo
            key={element.id}
            item={element}
            items={items}
            setItems={setItems}
          />
        ))}
      </div>
    </div>
  );
}

export default TodoList;
