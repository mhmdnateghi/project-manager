import { useRef } from "react";
import Input from "./Input.jsx";
import Modal from "./Modal.jsx";

export default function NewProject({ onAdd, onCancel }) {
  const title = useRef();
  const description = useRef();
  const dueDate = useRef();

  const modal = useRef();

  function handleSave() {
    const enteredTitle = title.current.value;
    const enteredDescription = description.current.value;
    const enteredDueDate = dueDate.current.value;

    if (
      enteredTitle.trim() === "" ||
      enteredDescription.trim() === "" ||
      enteredDueDate.trim() === ""
    ) {
      modal.current.open();
      return;
    }

    onAdd({
      title: enteredTitle,
      description: enteredDescription,
      dueDate: enteredDueDate,
    });
  }

  return (
    <>
      <Modal ref={modal}>
        <h2 className="text-xl text-center font-bold text-stone-700 my-4">
          !ورودی نامعتبر است
        </h2>
        <p className="text-stone-600 text-center mb-4">
          .اوه... به نظر می‌رسه مقداری وارد نکردید
        </p>
        <p className="text-stone-600 text-center mb-4">
          .لطفاً مطمئن شوید که تمام قسمت‌ها به‌درستی پر شده‌اند
        </p>
      </Modal>
      <div className="w-[35rem] mt-16">
        <menu className="flex items-center justify-start gap-4 my-4">
          <li>
            <button
              className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950"
              onClick={handleSave}
            >
              ثبت
            </button>
          </li>
          <li>
            <button
              className="text-stone-800 hover:text-stone-950"
              onClick={onCancel}
            >
              لغو
            </button>
          </li>
        </menu>
        <div>
          <Input type="text" ref={title} label="عنوان" />
          <Input ref={description} label="توضیح" textarea />
          <Input type="date" ref={dueDate} label="تاریخ تحویل" />
        </div>
      </div>
    </>
  );
}
