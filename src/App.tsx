import { useState } from "react";
import InputFeild from "./component/Items/InputFeild";
import TodoList from "./component/Items/TodoList";
import { Item } from "./model";

function App() {
  const [item, setItem] = useState<string>("");
  const [items, setItems] = useState<Item[]>([]);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();

    if (item) {
      setItems([...items, { id: Date.now(), todo: item, isDone: false }]);
      setItem("");
    }
  };

  console.log(items);
  return (
    <div className="bg-blue-800 h-screen">
      <div className="text-6xl text-center text-white">To Do</div>
      <div className="flex justify-center mt-4">
        <InputFeild item={item} setItem={setItem} handleAdd={handleAdd} />
      </div>
      <TodoList items={items} setItems={setItems} />
    </div>
  );
}

export default App;
