import Input from "./Input.jsx";

export default function NewProject() {
  return (
    <div className="w-[35rem] mt-16">
      <menu className="flex items-center justify-start gap-4 my-4">
        <li>
          <button className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950">
            ثبت
          </button>
        </li>
        <li>
          <button className="text-stone-800 hover:text-stone-950">لغو</button>
        </li>
      </menu>
      <div>
        <Input label="عنوان" />
        <Input label="توضیح" textarea />
        <Input label="تاریخ تحویل" />
      </div>
    </div>
  );
}
