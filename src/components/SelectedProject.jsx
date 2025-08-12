export default function SelectedProject({ project, onDelete }) {
  const formattedDate = new Date(project.dueDate).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
  return (
    <div className="w-[35rem] mt-16 ml-auto mr-96">
      <header className="pb-4 mb-4 border-b-2 border-stone-300">
        <div className="flex items-center justify-between">
          <button
            className="text-stone-600 hover:text-stone-950 bg-stone-400 hover:bg-stone-500 rounded-md px-4 py-2"
            onClick={onDelete}
          >
            حذف
          </button>
          <h1 className="text-3xl font-bold text-stone-600 mb-2">
            {project.title}
          </h1>
        </div>
        <p className="mb-4 text-stone-400 text-right">{formattedDate}</p>
        <p className="text-stone-600 whitespace-pre-wrap text-right">
          {project.description}
        </p>
      </header>
      TASKS
    </div>
  );
}
