import Button from "./Button.jsx";

export default function ProjectsSidebar({
  onStartAddProject,
  projects,
  onSelectProject,
  selectedProjectId,
}) {
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
          {projects.map((project) => {
            let cssClasses =
              "w-full text-right px-2 py-1 rounded-sm my-1 hover:text-stone-200 hover:bg-stone-800";

            if (project.id === selectedProjectId) {
              cssClasses += " bg-stone-800 text-stone-200";
            } else {
              cssClasses += " text-stone-400";
            }

            return (
              <li key={project.id}>
                <button
                  className={cssClasses}
                  onClick={() => onSelectProject(project.id)}
                >
                  {project.title}
                </button>
              </li>
            );
          })}
        </ul>
      </aside>
    </>
  );
}
