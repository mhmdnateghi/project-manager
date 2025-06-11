import Button from "./Button.jsx";

export default function ProjectsSidebar() {
  return (
    <>
      <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
        <h2 className="mb-8 font-bold md:text-xl text-stone-200 text-right">
          پروژه ها
        </h2>
        <div className="flex justify-end">
          <Button>اضافه کردن +</Button>
        </div>
      </aside>
    </>
  );
}
