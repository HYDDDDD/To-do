import React, { useRef } from "react";

interface Props {
  item: string;
  setItem: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (e: React.FormEvent) => void;
}

const InputFeild: React.FC<Props> = ({ item, setItem, handleAdd }) => {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <form
      className="w-11/12 relative items-center"
      onSubmit={(e) => {
        handleAdd(e);
        inputRef.current?.blur();
      }}
    >
      <input
        type={"text"}
        ref={inputRef}
        value={item}
        onChange={(e) => setItem(e.target.value)}
        placeholder="Enter a task."
        className="text-lg w-full rounded-3xl p-4 border-none transition shadow-inner outline-none focus:shadow-input"
      />
      <button
        type="submit"
        className="absolute w-12 h-12 m-2 rounded-3xl right-0 border-none text-sm transition bg-orange-600 focus:bg-green-400 focus:shadow-md focus:outline-none"
      >
        Go
      </button>
    </form>
  );
};

export default InputFeild;
