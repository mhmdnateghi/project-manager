import NewTask from "./NewTask.jsx";

function Tasks({ tasks, onAdd, onDelete }) {
  return (
    <section className="text-right">
      <h2 className="text-2xl font-bold text-stone-700 mb-4">فعالیت‌ها</h2>
      <NewTask onAdd={onAdd} />
      {tasks.length === 0 && (
        <p className="text-stone-800 my-4">
          .برای این پروژه هنوز فعالیتی تعریف نشده است
        </p>
      )}
      {tasks.length > 0 && (
        <ul className="p-4 mt-8 rounded-md bg-stone-100">
          {tasks.map((task) => (
            <li key={task.id} className="flex justify-between my-4">
              <button
                className="text-stone-700 hover:text-red-500"
                onClick={() => onDelete(task.id)}
              >
                پاک کردن
              </button>
              <span>{task.text}</span>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}

export default Tasks;
