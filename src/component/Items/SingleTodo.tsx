import React from "react";
import { Item } from "../../model";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { MdOutlineDone } from "react-icons/md";
// import './index.css';
import "../../SingleTodo.css";

type Props = {
  elementItem: Item;
  items: Item[];
  setItems: React.Dispatch<React.SetStateAction<Item[]>>;
};

function SingleTodo({ elementItem, items, setItems }: Props) {
  return (
    //lg => computer , md => ipad , sm => mobile
    <form className="flex w-auto rounded-md p-5 mt-4 bg-orange-500 ">
      <span className="flex-1 p-1 border-none text-xl focus:outline-none">
        {elementItem.item}
      </span>

      <span className="icon">
        <AiFillEdit />
      </span>
      <span className="icon">
        <AiFillDelete />
      </span>
      <span className="icon">
        <MdOutlineDone />
      </span>
    </form>
  );
}

export default SingleTodo;
