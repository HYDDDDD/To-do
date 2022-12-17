import { useState } from "react";
import { DragDropContext, DropResult } from "react-beautiful-dnd";
import InputFeild from "./component/Items/InputFeild";
import TodoList from "./component/Items/TodoList";
import { Item } from "./model";

function App() {
  const [item, setItem] = useState<string>("");
  const [items, setItems] = useState<Item[]>([]);
  const [completedItem, setCompletedItem] = useState<Item[]>([]);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();

    if (item) {
      setItems([...items, { id: Date.now(), todo: item, isDone: false }]);
      setItem("");
    }
  };

  const onDragEnd = (result: DropResult) => {
    const { source, destination } = result;

    if (!destination) {
      return;
    }
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    let add,
      active = items,
      complete = completedItem;

    if (source.droppableId === "ItemList") {
      add = active[source.index];
      active.splice(source.index, 1);
    } else {
      add = complete[source.index];
      complete.splice(source.index, 1);
    }

    if (destination.droppableId === "ItemList") {
      active.splice(destination.index, 0, add);
    } else {
      complete.splice(destination.index, 0, add);
    }

    setCompletedItem(complete);
    setItems(active);
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="bg-blue-800 h-screen">
        <div className="text-6xl text-center text-white">To Do</div>
        <div className="flex justify-center mt-4">
          <InputFeild item={item} setItem={setItem} handleAdd={handleAdd} />
        </div>
        <TodoList
          items={items}
          setItems={setItems}
          completedItem={completedItem}
          setCompletedItem={setCompletedItem}
        />
      </div>
    </DragDropContext>
  );
}

export default App;
