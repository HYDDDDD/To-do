import React from "react";
import { Droppable } from "react-beautiful-dnd";
import { Item } from "../../model";
import SingleTodo from "./SingleTodo";
import "../../SingleTodo.css";

interface Props {
  items: Item[];
  setItems: React.Dispatch<React.SetStateAction<Item[]>>;
  completedItem: Item[];
  setCompletedItem: React.Dispatch<React.SetStateAction<Item[]>>;
}

function TodoList({ items, setItems, completedItem, setCompletedItem }: Props) {
  return (
    <div className="flex mr-auto ml-auto w-11/12 mt-2 justify-between space-x-3 items-start max-sm:flex-col max-sm:space-y-3 max-sm:items-center max-sm:space-x-0">
      {/* droppableId = "TodoList" TodoList ใช้ไม่ได้ เพราะ droppabledId is uniquely ใช้ชื่อซ้ำกับที่มีอยู่แล้วไม่ได้ */}
      <Droppable droppableId="ItemList">
        {(provided, snapshot) => (
          <div
            className={`flex flex-col p-4 rounded-md bg-slate-900 justify-evenly w-11/12 flex-wrap ${
              snapshot.isDraggingOver ? "dragactive" : ""
            }`}
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            <span className="text-white text-lg font-semibold">
              Active Tasks
            </span>
            {items.map((element, index) => (
              <SingleTodo
                index={index}
                key={element.id}
                item={element}
                items={items}
                setItems={setItems}
              />
            ))}
            {/* fix when drag แล้วพื้นหลังไม่คลุม item ที่ลอยอยู่ในอากาศ (item is drag)  */}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
      <Droppable droppableId="ItemRemove">
        {(provided, snapshot) => (
          <div
            className={`flex flex-col p-4 rounded-md bg-sakura justify-evenly w-11/12 flex-wrap ${
              snapshot.isDraggingOver ? "dragcomplete" : "remove"
            }`}
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            <span className="text-white text-lg font-semibold">
              Completed Tasks
            </span>
            {completedItem.map((element, index) => (
              <SingleTodo
                index={index}
                key={element.id}
                item={element}
                items={completedItem}
                setItems={setCompletedItem}
              />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  );
}

export default TodoList;
