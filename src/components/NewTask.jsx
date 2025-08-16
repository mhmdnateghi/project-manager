import { useState } from "react";

function NewTask({ onAdd }) {
  const [enteredTask, setEnteredTask] = useState("");

  function handleChange(event) {
    setEnteredTask(event.target.value);
  }

  function handleClick() {
    if (enteredTask.trim() === "") {
      return;
    }
    onAdd(enteredTask);
    setEnteredTask("");
  }

  return (
    <div className="flex gap-4 justify-end items-center">
      <button
        className="text-stone-700 hover:text-stone-950"
        onClick={handleClick}
      >
        افزودن فعالیت
      </button>
      <input
        type="text"
        value={enteredTask}
        onChange={handleChange}
        className="w-64 px-2 py-1 rounded-sm bg-stone-200 text-right"
      />
    </div>
  );
}

export default NewTask;
