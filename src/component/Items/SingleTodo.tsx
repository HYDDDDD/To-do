import React, { useEffect, useRef, useState } from "react";
import { Item } from "../../model";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { MdOutlineDone } from "react-icons/md";
import "../../SingleTodo.css";

type Props = {
  item: Item;
  items: Item[];
  setItems: React.Dispatch<React.SetStateAction<Item[]>>;
};

function SingleTodo({ item, items, setItems }: Props) {
  const [edit, setEdit] = useState<boolean>(false);
  const [editItem, setEditItem] = useState<string>(item.todo);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleDone = (id: number) => {
    setItems(
      items.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };

  const handleDelete = (id: number) => {
    // if todo.id === id choose item this.
    setItems(items.filter((todo) => todo.id !== id));
  };

  const handleEdit = (e: React.FormEvent, id: number) => {
    e.preventDefault();

    setItems(
      items.map((todo) => (todo.id === id ? { ...todo, todo: editItem } : todo))
    );
    setEdit(false);
  };

  useEffect(() => {
    //curser input when click edit.
    inputRef.current?.focus();
  }, [edit]);

  return (
    //lg => computer , md => ipad , sm => mobile
    <form
      className="flex transition rounded-md p-5 mt-4 bg-orange-500 hover:shadow-md hover:shadow-black hover:scale-105"
      onSubmit={(e) => handleEdit(e, item.id)}
    >
      {edit ? (
        <input
          value={editItem}
          ref={inputRef}
          onChange={(e) => setEditItem(e.target.value)}
          className="flex-1 p-1 border-none text-xl focus:outline-none"
        />
      ) : item.isDone ? (
        <s className="flex-1 p-1 border-none text-xl focus:outline-none">
          {item.todo}
        </s>
      ) : (
        <span className="flex-1 p-1 border-none text-xl focus:outline-none">
          {item.todo}
        </span>
      )}

      <span
        className="icon"
        onClick={() => {
          if (!edit && !item.isDone) {
            setEdit(!edit);
          }
        }}
      >
        <AiFillEdit />
      </span>
      <span className="icon" onClick={() => handleDelete(item.id)}>
        <AiFillDelete />
      </span>
      <span className="icon" onClick={() => handleDone(item.id)}>
        <MdOutlineDone />
      </span>
    </form>
  );
}

export default SingleTodo;
