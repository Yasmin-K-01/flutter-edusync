import Sidebar from "../components/Sidebar";

function StudentDashboard() {
  return (
    <div className="flex min-h-screen bg-gray-100">

      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 p-8">

        {/* Header */}
        <div className="flex justify-between items-center">

          <div>
            <h1 className="text-4xl font-bold text-blue-700">
              Welcome, Student 👋
            </h1>

            <p className="text-gray-500 mt-2">
              Track your assignments and academic progress
            </p>
          </div>

          <div className="bg-white px-5 py-3 rounded-xl shadow">
            📅 Aug 2026
          </div>

        </div>


        {/* Statistics Cards */}
        <div className="grid md:grid-cols-4 gap-6 mt-8">


          <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
            <p className="text-gray-500">
              Total Tasks
            </p>

            <h2 className="text-4xl font-bold text-blue-600 mt-3">
              10
            </h2>
          </div>



          <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
            <p className="text-gray-500">
              Completed
            </p>

            <h2 className="text-4xl font-bold text-green-600 mt-3">
              6
            </h2>
          </div>



          <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
            <p className="text-gray-500">
              Pending
            </p>

            <h2 className="text-4xl font-bold text-red-600 mt-3">
              4
            </h2>
          </div>



          <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
            <p className="text-gray-500">
              Completion
            </p>

            <h2 className="text-4xl font-bold text-purple-600 mt-3">
              60%
            </h2>
          </div>


        </div>



        {/* Upcoming Tasks */}
        <div className="bg-white rounded-2xl shadow p-6 mt-8">

          <div className="flex justify-between items-center">

            <h2 className="text-2xl font-bold">
              Upcoming Tasks
            </h2>

            <button className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700">
              View All
            </button>

          </div>



          <div className="mt-5 space-y-4">


            <div className="flex justify-between items-center bg-red-50 p-4 rounded-xl border-l-4 border-red-500">

              <div>
                <h3 className="font-semibold">
                  Java Assignment
                </h3>

                <p className="text-sm text-gray-500">
                  Due: Aug 10, 2026
                </p>
              </div>


              <span className="bg-red-100 text-red-600 px-4 py-2 rounded-full">
                Pending
              </span>

            </div>



            <div className="flex justify-between items-center bg-green-50 p-4 rounded-xl border-l-4 border-green-500">

              <div>
                <h3 className="font-semibold">
                  Python Mini Project
                </h3>

                <p className="text-sm text-gray-500">
                  Submitted: Aug 2, 2026
                </p>
              </div>


              <span className="bg-green-100 text-green-600 px-4 py-2 rounded-full">
                Completed
              </span>

            </div>



          </div>


        </div>


      </div>

    </div>
  );
}

export default StudentDashboard;