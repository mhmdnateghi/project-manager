import Input from "./Input.jsx";

export default function NewProject() {
  return (
    <div>
      <menu>
        <li>
          <button>لغو</button>
        </li>
        <li>
          <button>ثبت</button>
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
