import NoProjectImage from "../assets/logo.png";
import Button from "./Button.jsx";

export default function NoProjectSelected({ onStartAddProject }) {
  return (
    <div className="mt-24 text-center w-2/3">
      <img
        src={NoProjectImage}
        alt="An empty task list"
        className="w-16 h-16 object-contain mx-auto"
      />
      <h2 className="text-xl font-bold text-stone-500 my-4">
        !پروژه‌ای انتخاب نشده
      </h2>
      <p className="text-stone-400 mb-4">
        .یک پروژه انتخاب کنید یا یک پروژه‌ی جدید ایجاد کنید
      </p>
      <p className="mt-8">
        <Button onClick={onStartAddProject}>ایجاد پروژه جدید</Button>
      </p>
    </div>
  );
}
