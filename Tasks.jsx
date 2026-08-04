import Sidebar from "../components/Sidebar";

function Tasks() {
  const tasks = [
    {
      title: "Java Assignment",
      subject: "Java Programming",
      due: "10 Aug 2026",
      priority: "High",
      status: "Pending",
    },
    {
      title: "Python Mini Project",
      subject: "Python",
      due: "05 Aug 2026",
      priority: "Medium",
      status: "Completed",
    },
    {
      title: "Database Report",
      subject: "DBMS",
      due: "15 Aug 2026",
      priority: "Low",
      status: "Pending",
    },
  ];

  return (
    <div className="flex min-h-screen bg-gray-100">

      <Sidebar />

      <div className="flex-1 p-8">

        <h1 className="text-4xl font-bold text-blue-700">
          My Tasks 📝
        </h1>

        <p className="text-gray-500 mt-2">
          Manage your assignments and deadlines
        </p>


        <div className="grid md:grid-cols-3 gap-6 mt-8">

          {tasks.map((task, index) => (

            <div
              key={index}
              className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition"
            >

              <h2 className="text-xl font-bold">
                {task.title}
              </h2>

              <p className="text-gray-500 mt-2">
                {task.subject}
              </p>


              <div className="mt-4 space-y-2">

                <p>
                  📅 Due: {task.due}
                </p>

                <p>
                  ⚡ Priority: 
                  <span className="font-semibold">
                    {" "}{task.priority}
                  </span>
                </p>

              </div>


              <div className="mt-5 flex justify-between items-center">


                <span
                  className={
                    task.status === "Completed"
                    ? "bg-green-100 text-green-600 px-3 py-1 rounded-full"
                    : "bg-red-100 text-red-600 px-3 py-1 rounded-full"
                  }
                >
                  {task.status}
                </span>


                {task.status === "Pending" && (
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-lg">
                    Submit
                  </button>
                )}


              </div>


            </div>

          ))}

        </div>

      </div>

    </div>
  );
}

export default Tasks;