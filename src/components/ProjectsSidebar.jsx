import Button from "./Button.jsx";

export default function ProjectsSidebar({ onStartAddProject, projects }) {
  return (
    <>
      <aside className="fixed right-0 h-full w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-l-xl">
        <h2 className="mb-8 font-bold md:text-xl text-stone-200 text-right">
          پروژه ها
        </h2>
        <div className="flex justify-end">
          <Button onClick={onStartAddProject}>اضافه کردن +</Button>
        </div>
        <ul className="mt-8">
          {projects.map((project) => (
            <li key={project.id}>
              <button className="w-full text-right px-2 py-1 rounded-sm my-1 text-stone-400 hover:text-stone-200 hover:bg-stone-800">
                {project.title}
              </button>
            </li>
          ))}
        </ul>
      </aside>
    </>
  );
}
